import {useKeycloak} from '@react-keycloak/web';
import {useCallback, useEffect, useState, useMemo} from 'react';
import {BsHouseDoor} from 'react-icons/bs';
import {FiEdit2} from 'react-icons/fi';
import {RiDeleteBinLine} from 'react-icons/ri';
import {useNavigate} from 'react-router-dom';
import Modal from '../component/Modal';
import {petColumns} from '../component/table/columns/petColumns';
import {Table} from '../component/table/Table';
import {defaultAvailablePets} from '../data/data';
import {useActions} from '../state/hooks/useActions';
import {useGetAllApiCalls} from '../utils/apiCalls/petApiCalls/useGetAllApiCalls';
import {usePetAllApiCalls} from '../utils/apiCalls/petApiCalls/usePutAllApiCalls';
import 'react-toastify/dist/ReactToastify.css';
import {notifyToaster} from '../utils/functions';

export const Pets = () => {
	const [pets, setPets] = useState<Components.Schemas.Pet[]>(defaultAvailablePets);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [currentPetId, setCurrentPetId] = useState<string>('');
	const {getAllPets} = useGetAllApiCalls();
	const {deletePet} = usePetAllApiCalls();

	const {keycloak} = useKeycloak();
	const navigate = useNavigate();

	const {handleEditablePet} = useActions();

	const handleGetAllPets = useCallback(async () => {
		const value = await getAllPets();
		if (value) setPets(value);
	}, [getAllPets]);

	const handleConfirmToDelete = async () => {
		try {
			const value = await deletePet(currentPetId);
			if (value && (value.status >= 200 || value.status <= 299)) {
				await handleGetAllPets();
				setIsModalOpen(false);
			}
		} catch (error) {
			if (error instanceof Error) {
				notifyToaster(error.message, 'error');
			}
		}
	};

	const onSelectedRowsChange = (selected: {allSelected: boolean; selectedCount: number; selectedRows: Components.Schemas.Pet[]}) => {
		const pet = selected.selectedRows.find(a => a.id);

		if (pet) {
			setCurrentPetId(pet.id);
		}
	};

	const handleOnCloseModal = () => {
		setIsModalOpen(prev => !prev);
	};


	const handleEditPet = useCallback(() => {
		const currentPet = pets.find((a) => a.id === currentPetId);
		if (currentPet) {
			handleEditablePet(currentPet);
			navigate(`/dashboard/${currentPetId}`);
		}

	}, [currentPetId, handleEditablePet, navigate, pets]);

	useEffect(() => {
		void handleGetAllPets();
	}, [handleGetAllPets]);


	const contextActions = useMemo(() => (
		<>
			<div className='flex items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 hover:cursor-pointer' onClick={handleOnCloseModal}>
				<button type='button' key="delete">
					Delete
				</button>
				<RiDeleteBinLine className='ml-2' />
			</div>

			<div className='flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 hover:cursor-pointer' onClick={handleEditPet}>
				<button type='button' key="edit">
					Edit
				</button>
				<FiEdit2 className='ml-2' color='white' />
			</div>
		</>
	), [handleEditPet]);

	if (isModalOpen) {
		return <Modal isOpen={isModalOpen} modalTitle="Attention.!" modalContent='Do you want to delete this pet_?' onAcceptButton={handleConfirmToDelete} onCloseAction={handleOnCloseModal} acceptValue='Delete' />;
	}

	return (
		<div>
			{(pets && pets.length > 0)
				? <Table columns={petColumns} data={pets} contextActions={contextActions} onSelectedRowsChange={onSelectedRowsChange} title='Pets' selectableRowsSingle authenticated={keycloak.authenticated} />
				: <div className='flex flex-col items-center mt-5 mb-5'>
					<BsHouseDoor size={60} />
					<p>No body at home</p>
				</div>
			}
		</div>
	);
};
