import React from 'react';
import { Metadata } from 'next';
import ShippingDetailsComponent from './_shippingDetailsComponent';
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
			<ShippingDetailsComponent></ShippingDetailsComponent>
			<Footer></Footer>
		</div>
	);
};

export default ShippingPage;
