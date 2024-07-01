import { Metadata } from 'next'
import Link from 'next/link'
import MiniNavbar from '../_components/HeaderMini'
// import SinginComponent from './signinComponent'
import Footer from '../_components/Footer'
import BrandsComponent from './brandComponent'
import MainNavbar from '../_components/Header'

export const metadata: Metadata = {
  title: '',
  description: '',
}

const BrandsPage = () => {
   
	return (
		<main>
			<MainNavbar></MainNavbar>
			<BrandsComponent></BrandsComponent>
			<Footer></Footer>
		</main>
	)
}

export default BrandsPage;