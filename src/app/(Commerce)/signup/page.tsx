'use client';
import Link from 'next/link'
import {Form, Button} from 'react-bootstrap'
import styles from '../_styles/signinComponent.module.scss'
import MiniNavbar from '../_components/HeaderMini';
import Footer from '../_components/Footer';
import SignupComponent from './signupComponent';

const SignupPage = () => {
    return (
        <main>
            <MiniNavbar></MiniNavbar>
            <SignupComponent></SignupComponent>
            <Footer></Footer>
        </main>
      )
}
  
export default SignupPage;
