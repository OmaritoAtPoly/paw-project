import React, {useCallback, useEffect, useMemo} from 'react';
import {useFormik} from 'formik';
import {format} from 'date-fns';
import {DayPicker} from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import * as yup from 'yup';
import {RxThickArrowRight} from 'react-icons/rx';
import Select, {type SingleValue, type MultiValue} from 'react-select';
import axios, {type AxiosResponse} from 'axios';
import {useLoaderData, useNavigate} from 'react-router-dom';
import {generate} from 'shortid';
import {type LatLngExpression} from 'leaflet';
import {type SelectOptionType, type PetDataType, petDefaultData} from '../data/data';
import {useGetCurrentUser} from '../utils/hooks/getCurrentUser';
import {MapContainerWrapper} from '../component/mapComponent/MapContainerWrapper';
import {WHERE_WAS_FOUND} from '../utils/constants';

const SignInSchema = yup.object().shape({
	name: yup.string().required('Required'),
	about: yup.string().required('Required'),
	tailDetails: yup.string().required('Required'),
	details: yup.array().min(1).required('Required'),
	training: yup.string().required('Required'),
	medicalRecord: yup.array().min(1).required('qqqq'),
	socialSkills: yup.string().required('Required'),
});

export const DashboardPage = () => {
	const navigate = useNavigate();
	const {rol} = useGetCurrentUser();

	const handleSubmitValue = async (value: PetDataType) => {
		try {
			const response: AxiosResponse<PetDataType> = await axios.post(
				'http://localhost:4000/petDetails',
				{id: generate(), ...value},
			);

			if (response.status >= 200 && response.status < 300) navigate('/');

		} catch (error) {
			if (error instanceof Error) {
				console.log('there is an error here: => ', error);
			}
		}
	};

	const {handleSubmit, values, handleChange, errors, touched, setFieldValue} =
		useFormik({
			initialValues: petDefaultData,
			onSubmit: async (formValues: PetDataType, actions) => {
				await handleSubmitValue(formValues);
				actions.resetForm();
			},
			validationSchema: SignInSchema,
		});

	const handleRescueDate = useCallback(async (day: Date | undefined) => {
		await setFieldValue('rescueDate', day);
	}, [setFieldValue]);

	let footer = <p>Please pick a day.</p>;

	if (values.rescueDate) {
		footer = <p className='text-center'>You picked {format(values.rescueDate, 'PP')}.</p>;
	}

	const handlePetDetails = async (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		const result = event.target.value.split(',');
		await setFieldValue('details', result);
	};

	const commonItemStyles = 'my-9';

	const petPhysicDetails = useLoaderData() as Array<{
		tailSize: string[];
		training: string[];
		medicalRecord: string[];
		socialSkill: string[];
	}>;

	const handleSocialSkills = useMemo((): SelectOptionType => {
		const parsedArray = Object.values(petPhysicDetails[0].socialSkill);
		return parsedArray.map((a) => ({value: a, label: a}));
	}, [petPhysicDetails]);

	const handleTraining = useMemo((): SelectOptionType => {
		const parsedArray = Object.values(petPhysicDetails[0].training);
		return parsedArray.map((a) => ({value: a, label: a}));
	}, [petPhysicDetails]);

	const handleMedicalRecord = useMemo((): SelectOptionType => {
		const parsedArray = Object.values(petPhysicDetails[0].medicalRecord);
		return parsedArray.map((a) => ({value: a, label: a}));
	}, [petPhysicDetails]);

	const handlePetTailSize = useMemo((): SelectOptionType => {
		const parsedArray = Object.values(petPhysicDetails[0].tailSize);
		return parsedArray.map((a) => ({value: a, label: a}));
	}, [petPhysicDetails]);

	const handleSingleSelector = async (newValue: SingleValue<{value: string; label: string}>, target: string) => {
		await setFieldValue(target, newValue?.value, true);
	};

	const handleMultiSelectors = useCallback(async (newValue: MultiValue<{value: string; label: string}>, target: string) => {
		const value = newValue.map(a => a.label);
		await setFieldValue(target, value);
	}, [setFieldValue]);

	useEffect(() => {
		if (rol !== 'admin') navigate('/');
	}, [navigate, rol]);

	const handlerMarkerPosition = useCallback(async (value: LatLngExpression) => {
		await setFieldValue('rescuePlace', value);
	}, [setFieldValue]);

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
							selected={values.rescueDate}
							onSelect={handleRescueDate}
							footer={footer}
							className='border border-gray-300'
						/>
					</div>
					<div className='md:w-full'>
						<p className="text-2xl sm:text-[27px] text-center">Place where the Pet was found</p>
						<MapContainerWrapper markerPosition={values.rescuePlace} handlerMarkerPosition={handlerMarkerPosition} popUpMessage={WHERE_WAS_FOUND} />
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
							options={handleTraining}
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
							options={handleMedicalRecord}
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
							options={handleSocialSkills}
							onChange={async (value) => {
								await handleSingleSelector(value, 'socialSkills');
							}}
							className="sm:w-[300px]"
						/>
						{errors.socialSkills && touched.socialSkills ? (
							<div className="text-red-500">{errors.socialSkills}</div>
						) : null}
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

export const petDetailsLoader = async (): Promise<string> => {
	let result = '';

	try {
		const value: AxiosResponse<string> = await axios.get(
			'http://localhost:4000/physicAspects',
		);

		if (value.status === 200) {
			result = value.data;
		}
	} catch (error) {
		if (error instanceof Error) {
			console.log('there is an error due to:', error.message);
		}
	}

	return result;
};