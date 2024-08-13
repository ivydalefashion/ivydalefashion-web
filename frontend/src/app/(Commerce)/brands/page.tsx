import { Metadata } from 'next';
import BrandsComponent from './brandsComponent';
import MainNavbar from '../_components/Header';
import Footer from '../_components/Footer';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const BrandPage = () => {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<BrandsComponent></BrandsComponent>
			<Footer></Footer>
		</div>
	);
};

export default BrandPage;
