import { Metadata } from 'next'
import Link from 'next/link'
import MiniNavbar from '../_components/HeaderMini'
// import SinginComponent from './signinComponent'
import Footer from '../_components/Footer'
import BrandComponent from './brandComponent'

export const metadata: Metadata = {
  title: '',
  description: '',
}

const BrandPage = () => {
   
	return (
		<main>
			<MiniNavbar></MiniNavbar>
			{/* <SinginComponent></SinginComponent> */}
            <BrandComponent></BrandComponent>
			<Footer></Footer>
		</main>
	)
}

export default BrandPage;