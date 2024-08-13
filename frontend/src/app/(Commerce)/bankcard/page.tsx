import { Metadata } from 'next';
import Footer from '../_components/Footer';
import MainNavbar from '../_components/Header';
// import CartComponent from './_cartComponent';
import BankCardComponent from './_bankcardComponent';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const BankCardPage = () => {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<BankCardComponent></BankCardComponent>
			<Footer></Footer>
		</div>
	);
};

export default BankCardPage;
