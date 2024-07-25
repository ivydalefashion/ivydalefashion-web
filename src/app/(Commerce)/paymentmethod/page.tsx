import React from 'react';
import { Metadata } from 'next';
import PaymentMethodComponent from './_paymentmethodComponent';
import Header from '../_components/Header';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
	title: 'Ivydale payment method',
	description: '...',
};

const PaymentMethodPage = () => {
	return (
		<div>
			<Header></Header>
			<PaymentMethodComponent></PaymentMethodComponent>
			<Footer></Footer>
		</div>
	);
};

export default PaymentMethodPage;
