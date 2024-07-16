import React from 'react';
import { Metadata } from 'next';
import Header from '../_components/Header';
import Footer from '../_components/Footer';
import ShippingMethodComponent from './_shippingMethodComponent';

export const metadata: Metadata = {
	title: 'Ivydale Shipping',
	description: '...',
};

const ShippingPage = () => {
	return (
		<div>
			<Header></Header>
			<ShippingMethodComponent></ShippingMethodComponent>
			<Footer></Footer>
		</div>
	);
};

export default ShippingPage;
