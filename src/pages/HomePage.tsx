import React from 'react';
import HeadLinesCards from '../component/HeadLinesCards';
import Hero from '../component/Hero';
import RescueStats from '../component/RescueStats';
import NewsletterSignup from '../component/NewsletterSignup';

export const HomePage = () => (
	<>
		<Hero />
		<HeadLinesCards />
		<RescueStats />
		<NewsletterSignup />
	</>
);
