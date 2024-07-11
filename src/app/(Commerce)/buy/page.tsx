import React from 'react'
import { Metadata } from 'next';
import BuyComponent from './_buyComponent';
import MainNavbar from '../_components/Header';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const BrandPage = () => {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<BuyComponent></BuyComponent>
			{/* <Footer></Footer> */}
		</div>
	);
};

export default BrandPage;
