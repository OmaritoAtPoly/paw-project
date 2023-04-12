import React from 'react';
import {useKeycloak} from '@react-keycloak/web';
import HeadLinesCards from '../component/HeadLinesCards';
import Hero from '../component/Hero';
import RescueStats from '../component/RescueStats';
import NewsletterSignup from '../component/NewsletterSignup';

export const HomePage = () => {
	const {keycloak} = useKeycloak();

	return (
		<>
			<Hero />
			{keycloak.token && <HeadLinesCards />}
			<RescueStats />
			<NewsletterSignup />
		</>
	);
};
