import {useCallback, useEffect, useState, useMemo} from 'react';
import {BsHouseDoor} from 'react-icons/bs';
import Modal from '../component/Modal';
import {petColumns} from '../component/table/columns/petColumns';
import {Table} from '../component/table/Table';
import {defaultAvailablePets} from '../data/data';
import {useGetAllApiCalls} from '../utils/apiCalls/petApiCalls/useGetAllApiCalls';
import {usePetAllApiCalls} from '../utils/apiCalls/petApiCalls/usePutAllApiCalls';

export const Pets = () => {
	const [pets, setPets] = useState<Components.Schemas.Pet[]>(defaultAvailablePets);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [petToDelete, setPetToDelete] = useState<string>('');
	const {getAllPets} = useGetAllApiCalls();
	const {deletePet} = usePetAllApiCalls();

	const handleGetAllPets = useCallback(async () => {
		const value = await getAllPets();
		if (value) setPets(value);
	}, [getAllPets]);

	const handleConfirmToDelete = async () => {
		const value = await deletePet(petToDelete);

		if (value && (value.status >= 200 || value.status <= 299)) {
			await handleGetAllPets();
			setIsModalOpen(false);
		}
	};

	const onSelectedRowsChange = (selected: {allSelected: boolean; selectedCount: number; selectedRows: Components.Schemas.Pet[]}) => {
		const pet = selected.selectedRows.find(a => a.id);

		if (pet) {
			setPetToDelete(pet.id);
		}
	};

	const handleOnCloseModal = () => {
		setIsModalOpen(prev => !prev);
	};

	useEffect(() => {
		void handleGetAllPets();
	}, [handleGetAllPets]);

	const contextActions = useMemo(() => (
		<button type='button' key="delete" onClick={handleOnCloseModal} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
			Delete
		</button>
	), []);

	if (isModalOpen) {
		return <Modal isOpen={isModalOpen} modalTitle="Attention.!" modalContent='Do you want to delete this pet_?' onAcceptButton={handleConfirmToDelete} onCloseAction={handleOnCloseModal} acceptValue='Delete' />;
	}

	return (
		<div>
			{(pets && pets.length > 0)
				? <Table columns={petColumns} data={pets} contextActions={contextActions} onSelectedRowsChange={onSelectedRowsChange} />
				: <div className='flex flex-col items-center mt-5 mb-5'>
					<BsHouseDoor size={60} />
					<p>No body at home</p>
				</div>
			}
		</div>
	);
};
