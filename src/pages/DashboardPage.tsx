import React, {useCallback, useEffect, useMemo} from 'react';
import {useFormik} from 'formik';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as yup from 'yup';
import {RxThickArrowRight} from 'react-icons/rx';
import Select, {type SingleValue, type MultiValue} from 'react-select';
import {type AxiosResponse} from 'axios';
import {useLoaderData, useNavigate, useParams} from 'react-router-dom';
import {useKeycloak} from '@react-keycloak/web';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {type SelectOptionType, petDefaultData, defaultSelectOptions} from '../data/data';
import {MapContainerWrapper} from '../component/mapComponent/MapContainerWrapper';
import {WHERE_WAS_FOUND} from '../utils/constants';
import {useTypedSelector} from '../state/hooks/useTypedSelector';
import {cleanString} from '../utils/functions';
import {usePetAllApiCalls} from '../utils/apiCalls/petApiCalls/usePutAllApiCalls';
import {axiosPublic} from '../utils/axiosConfiguration';

const AddingPetSchema = yup.object().shape({
	name: yup.string().required('Required'),
	about: yup.string().required('Required'),
	tailDetails: yup.string().required('Required'),
	details: yup.string().required('Required'),
	training: yup.string().required('Required'),
	medicalRecord: yup.string().required('Required'),
	socialSkills: yup.string().required('Required'),
	petImage: yup.string().required('Required'),
});

export const DashboardPage = () => {
	const navigate = useNavigate();
	const {keycloak} = useKeycloak();
	const {id} = useParams();

	const petInfo = useTypedSelector(
		(state) => state.currentPet,
	);

	const {addNewPet, updateExistingPet} = usePetAllApiCalls();

	const handleSubmitValue = async (value: Components.Schemas.Pet) => {
		try {
			if (id) {
				const response = await updateExistingPet(value);
				if (response.status >= 200 && response.status < 300) navigate(-1);
			} else {
				const response = await addNewPet(value);
				if (response.status >= 200 && response.status < 300) navigate('/');
			}
		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error here: => ', error);
			}
		}
	};

	const handleCleanFormValues = (value: Components.Schemas.Pet) => {
		const details = cleanString(value.details);
		const medicalRecord = value.medicalRecord.toString().split(',').join(','); //this operation is made to convert the string array in the formik state to a flat string and then join all the element with a comma
		const rescued = new Date(value.rescueDate);
		const correctValue = rescued.setDate(rescued.getDate() + 1);

		return {...value, rescueDate: new Date(correctValue).toISOString(), details, medicalRecord};

	};

	const {handleSubmit, values, handleChange, errors, touched, setFieldValue} =
		useFormik({
			initialValues: (petInfo && id) ? {...petInfo, details: cleanString(petInfo.details.toString()), medicalRecord: cleanString(petInfo.medicalRecord.toString())} : petDefaultData,
			onSubmit: async (formValues: Components.Schemas.Pet, actions) => {
				const cleanedValues = handleCleanFormValues(formValues);

				await handleSubmitValue(cleanedValues);
				actions.resetForm();
			},
			validationSchema: AddingPetSchema,
		});

	const handleRescueDate = useCallback(async (day: Date | undefined) => {
		await setFieldValue('rescueDate', day?.toLocaleDateString());
	}, [setFieldValue]);

	let footer = <p>Please pick a day.</p>;

	if (values.rescueDate) {
		footer = <p className='text-center'>You picked {new Date(values.rescueDate).toDateString()}.</p>;
	}

	const handlePetDetails = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const result = event.target.value;
		await setFieldValue('details', result);
	};

	const commonItemStyles = 'my-9';

	const petPhysicDetails = useLoaderData() as Components.Schemas.Lookups;

	const handleSelectValues = useCallback((detail = ''): SelectOptionType => {
		let parsedArray: SelectOptionType = defaultSelectOptions;

		if (detail === 'training' && petPhysicDetails.training) {
			parsedArray = petPhysicDetails.training.map((a) => ({value: a.name!, label: a.name!}));
			return parsedArray;
		}

		if (detail === 'socialSkills' && petPhysicDetails.socialSkill) {
			parsedArray = petPhysicDetails.socialSkill.map((a) => ({value: a.name!, label: a.name!}));
			return parsedArray;
		}

		if (detail === 'medicalRecord' && petPhysicDetails.medicalRecord) {
			parsedArray = petPhysicDetails.medicalRecord.map((a) => ({value: a.name!, label: a.name!}));
			return parsedArray;
		}

		return parsedArray;
	}, [petPhysicDetails.medicalRecord, petPhysicDetails.socialSkill, petPhysicDetails.training]);

	const handlePetTailSize = useMemo((): SelectOptionType => {
		let parsedArray: SelectOptionType = defaultSelectOptions;

		if (petPhysicDetails.tailSize) {
			parsedArray = petPhysicDetails.tailSize.map((a) => ({value: a.name!, label: a.name!}));
			return parsedArray;
		}

		return parsedArray;
	}, [petPhysicDetails.tailSize]);

	const handleSingleSelector = async (newValue: SingleValue<{value: string; label: string}>, target: string) => {
		await setFieldValue(target, newValue?.value, true);
	};

	const handleMultiSelectors = useCallback(async (newValue: MultiValue<{value: string; label: string}>, target: string) => {
		const value = newValue.map(a => a.label).join(',');
		await setFieldValue(target, value);
	}, [setFieldValue]);

	useEffect(() => {
		const adminRol = keycloak.tokenParsed?.realm_access?.roles.includes('paw-admin-role');

		if (!adminRol) navigate('/');
	}, [keycloak.tokenParsed?.realm_access, navigate]);

	const handlerMarkerPosition = useCallback(async (value: Components.Schemas.Location) => {
		await setFieldValue('rescueLocation', value);
	}, [setFieldValue]);

	const handleDefaultMedicalRecord = useMemo(() => {
		if (petInfo && id) {
			return (petInfo.medicalRecord).toString().split(',').map((a) => ({value: a, label: a}));
		}

		return [{value: '', label: ''}];
	}, [id, petInfo]);

	const handleFormikMedicalRecord = useMemo(() => {
		if (values.medicalRecord) {
			const value = (petInfo.medicalRecord).toString().split(',');
			return value.map((a) => ({value: a, label: a}));
		}

		return undefined;
	}, [petInfo.medicalRecord, values.medicalRecord]);


	const convertFileToBase64 = async (file: File) =>
		new Promise((resolve, reject) => {
			const fileReader = new FileReader();
			fileReader.readAsDataURL(file);
			fileReader.onload = () => {
				resolve(fileReader.result);
			};

			fileReader.onerror = (error) => {
				reject(error);
			};
		});

	const uploadLocalConsentFile = useCallback(
		async (event: React.ChangeEvent<HTMLInputElement>) => {

			if (event.target.files) {
				const file = event.target.files[0];
				const base64 = file && ((await convertFileToBase64(file)) as string);
				if (base64) await setFieldValue('petImage', base64);
			}
		},
		[setFieldValue],
	);

	const cleanPetImage = async () => {
		await setFieldValue('petImage', '');
	};

	return (
		<>
			<h1 className="mx-auto text-center text-[30px] md:text-[4vw] lg:text-[3vw]">
				Add Pet&apos;s data
			</h1>
			<form
				onSubmit={handleSubmit}
				className=" mt-5 w-full flex flex-col items-center justify-between h-full"
			>
				{/* {showErrorAlert
          ? (
            <div className="w-full flex justify-center">
              <CardAlert
                cardInfo="errors.name"
                handleOnClose={handleErrorAlert}
              />
            </div>
          ) : ( */}
				<div className='lg:flex flex-row lg:w-full lg:items-center lg:justify-evenly drop-shadow-xl rounded-xl'>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">Pet&lsquo;s name</p>
						<input
							id="name"
							name="name"
							type="text"
							onChange={handleChange}
							value={values.name}
							placeholder="Write the pet's name"
							className="w-[50vw] p-2 border border-gray-300 rounded-md placeholder:text-black/50 outline-none sm:w-[300px]"
						/>
						{errors.name && touched.name ? (
							<div className="text-red-500">{errors.name}</div>
						) : null}
					</div>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">About my Pet</p>
						<textarea
							id="about"
							name="about"
							onChange={handleChange}
							value={values.about}
							placeholder="Describe the pet's resume"
							className="w-[50vw] p-2 border border-gray-300 rounded-md placeholder:text-black/50 outline-none sm:w-[300px]"
						/>
						{errors.about && touched.about ? (
							<div className="text-red-500">{errors.about}</div>
						) : null}
					</div>
				</div>
				<div className={`${commonItemStyles} md:flex md:flex-row md:w-[90vw] md:items-start md:justify-between drop-shadow-xl rounded-xl`}>
					<div>
						<p className="text-2xl sm:text-[27px] text-center">When was found</p>
						<DayPicker
							mode="single"
							selected={new Date(values.rescueDate)}
							onSelect={handleRescueDate}
							footer={footer}
							className='border border-gray-300'
						/>
					</div>
					<div className='md:w-full'>
						<p className="text-2xl sm:text-[27px] text-center">Place where the Pet was found</p>
						<MapContainerWrapper markerPosition={values.rescueLocation} handlerMarkerPosition={handlerMarkerPosition} popUpMessage={WHERE_WAS_FOUND} scrollWheelZoom={false} />
					</div>
				</div>
				<div className={`${commonItemStyles} drop-shadow-xl rounded-xl`}>
					<p className="text-2xl sm:text-[27px] text-center">Write down Pet&lsquo;s details</p>
					<textarea
						id="details"
						name="details"
						onChange={handlePetDetails}
						value={values.details}
						placeholder="Describe the pet characteristics, comma separated"
						className="w-[50vw] p-2 border border-gray-300 rounded-md placeholder:text-black/50 outline-none"
					/>
					{errors.details && touched.details ? (
						<div className="text-red-500">{errors.details}</div>
					) : null}
				</div>
				<div className='md:flex md:w-full md:justify-around md:flex-wrap drop-shadow-xl rounded-xl'>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">Choose large of Pet&lsquo;s tail</p>
						<Select
							defaultValue={{value: values.tailDetails, label: values.tailDetails}}
							options={handlePetTailSize}
							onChange={async (value) => {
								await handleSingleSelector(value, 'tailDetails');
							}} className="sm:w-[300px]"
						/>
						{errors.tailDetails && touched.tailDetails ? (
							<div className="text-red-500">{errors.tailDetails}</div>
						) : null}
					</div>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">Does have any training?</p>
						<Select
							defaultValue={{value: values.training, label: values.training}}
							options={handleSelectValues('training')}
							onChange={async (value) => {
								await handleSingleSelector(value, 'training');
							}}
							className="sm:w-[300px]"
						/>
						{errors.training && touched.training ? (
							<div className="text-red-500">{errors.training}</div>
						) : null}
					</div>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">Medical records</p>
						<Select
							defaultValue={(id && petInfo) ? handleDefaultMedicalRecord : handleFormikMedicalRecord}
							options={handleSelectValues('medicalRecord')}
							onChange={async (value) => {
								await handleMultiSelectors(value, 'medicalRecord');
							}}
							isMulti
							className="sm:w-[300px]"
						/>
						{errors.medicalRecord && touched.medicalRecord ? (
							<div className="text-red-500">{errors.medicalRecord}</div>
						) : null}
					</div>
					<div className={`${commonItemStyles}`}>
						<p className="text-2xl sm:text-[27px]">Social Skills</p>
						<Select
							defaultValue={{value: values.socialSkills, label: values.socialSkills}}
							options={handleSelectValues('socialSkills')}
							onChange={async (value) => {
								await handleSingleSelector(value, 'socialSkills');
							}}
							className="sm:w-[300px]"
						/>
						{errors.socialSkills && touched.socialSkills ? (
							<div className="text-red-500">{errors.socialSkills}</div>
						) : null}
					</div>
					<div className='flex items-center flex-col justify-center'>
						<div className='flex items-center'>
							<input
								id="petImage"
								name="petImage"
								type="file"
								accept=".jpeg, .png, .jpg"
								onChange={uploadLocalConsentFile}
								className="border border-gray-300 rounded-md w-fit"
							/>
							<IoIosCloseCircleOutline size={20} className='hover:cursor-pointer ml-[-20px]' onClick={cleanPetImage} />
						</div>
						{errors.petImage && touched.petImage ? (
							<div className="text-red-500">{errors.petImage}</div>
						) : null}
						{values.petImage ? <img src={values.petImage} alt='petImage' className='w-[200px] h-auto' /> : ''}
					</div>
				</div>
				<button
					type="submit"
					className="w-fit flex justify-center items-center p-2 space-x-4 font-sans font-bold text-white rounded-md shadow-lg px-9 bg-primary/70 shadow-blue-200 hover:shadow-lg hover:scale-y-105 duration-200 my-3"
				>
					<span>Next</span>
					<RxThickArrowRight />
				</button>
			</form>
		</>
	);
};

export const petDashboardLoader = async () => {
	try {
		const value: AxiosResponse<Components.Schemas.Lookups> = await axiosPublic.get(
			'/lookups',
		);

		return value.data;
	} catch (error) {
		if (error instanceof Error) {
			console.log('there is an error due to:', error.message);
		}
	}

	return undefined;
};