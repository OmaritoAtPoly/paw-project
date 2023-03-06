import React from 'react';
import {type petDefaultData} from '../../data/data';
import {ConsideringToAdopt} from './ConsideringToAdopt';
import {ContactSection} from './ContactSection';

interface Props {
	petData: typeof petDefaultData;
}

export const PetDetailAside = ({petData}: Props) => (
	<aside className="relative md:max-w-md">
		<div className="sticky top-28">
			<ConsideringToAdopt petName={petData.name} />
			<ContactSection	/>
		</div>
	</aside>
);
