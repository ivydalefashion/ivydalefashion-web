import { Metadata } from 'next';
import Footer from '../_components/Footer';
import MainNavbar from '../_components/Header';
import CartComponent from './_cartComponent';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const CartPage = () => {
	return (
		<div>
			<MainNavbar></MainNavbar>
			<CartComponent></CartComponent>
			<Footer></Footer>
		</div>
	);
};

export default CartPage;
