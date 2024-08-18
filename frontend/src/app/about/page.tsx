import React from 'react';
import { Metadata } from 'next';
import { Container, Row } from 'react-bootstrap';
import MainNavbar from '../(Commerce)/_components/Header';
import AboutComponent from './aboutComponent';

//Metadata:
export const metadata: Metadata = {
	title: 'About Ivydale',
	description: '',
};

const AboutPage = () => {
	return (
		<div>
			<AboutComponent></AboutComponent>
		</div>
	);
};

export default AboutPage;
