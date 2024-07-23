
import React from 'react';
import { Metadata } from 'next';
import HomeComponent from './home/homeComponent';

export const metadata: Metadata = {
	title: 'Ivydale Home',
	description: 'Generated by create next app',
};

const HomePage = () => {
	return (
		<div>
			<HomeComponent></HomeComponent>
		</div>
	);
};

export default HomePage;
