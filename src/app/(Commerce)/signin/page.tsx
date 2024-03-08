import { Metadata } from 'next'
import Link from 'next/link'
import MiniNavbar from '../_components/HeaderMini'
import SinginComponent from './signinComponent'
import Footer from '../_components/Footer'

export const metadata: Metadata = {
  title: 'Signin to IvydaleFashion',
  description: 'Sign in or Login here to access your Ivydalefashion account.',
}

const SigninPage = () => {
   
	return (
		<main>
			<MiniNavbar></MiniNavbar>
			<SinginComponent></SinginComponent>
			<Footer></Footer>
		</main>
	)
}

export default SigninPage;