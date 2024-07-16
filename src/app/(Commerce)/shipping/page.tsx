import React from 'react';
import { Metadata } from 'next';
import ShippingDetailsComponent from './_shippingComponent';

export const metadata: Metadata = {
	title: 'Ivydale Shipping',
	description: '...',
};

const ShippingPage = () => {
	return (
		<div>
			<ShippingDetailsComponent></ShippingDetailsComponent>
		</div>
	);
};

export default ShippingPage;
