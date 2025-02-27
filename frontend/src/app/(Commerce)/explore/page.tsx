import { Metadata } from 'next';
import Footer from '../_components/Footer';
import ExploreComponent from './exploreComponent';
import MainNavbar from '../_components/Header';

export const metadata: Metadata = {
	title: '',
	description: '',
};

const BrandsPage = () => {
	return (
		<main>
			<MainNavbar></MainNavbar>
			<ExploreComponent></ExploreComponent>
			<Footer></Footer>
		</main>
	);
};

export default BrandsPage;
