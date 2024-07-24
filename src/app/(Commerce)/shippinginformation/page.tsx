import React from 'react';
import { Metadata } from 'next';
import ShippingInformationComponent from './_shippingInformationComponent';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
	title: 'Ivydale Shipping',
	description: '...',
};

const ShippingPage = () => {
	return (
		<div>
			<Header></Header>
			<ShippingInformationComponent></ShippingInformationComponent>
			<Footer></Footer>
		</div>
	);
};

export default ShippingPage;
