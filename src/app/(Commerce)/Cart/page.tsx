import { Metadata } from 'next'
import Link from 'next/link'
import MiniNavbar from '../_components/HeaderMini'
// import SinginComponent from './signinComponent'
import Footer from '../_components/Footer'
// import BrandComponent from './brandComponent'
import MainNavbar from '../_components/Header'
import CartComponent from './cartComponent'

export const metadata: Metadata = {
  title: '',
  description: '',
}

const CartPage = () => {
   
	return (
		<main>
			<MainNavbar></MainNavbar>
			{/* <SinginComponent></SinginComponent> */}
            {/* <BrandComponent></BrandComponent> */}
            <CartComponent></CartComponent>
			<Footer></Footer>
		</main>
	)
}

export default CartPage;