"use client";

import MiniNavbar from '../_components/HeaderMini';
import Footer from '../_components/Footer';
import SignupComponent from './_signupComponent';

const SignupPage = () => {
    return (
        <div>
            <MiniNavbar></MiniNavbar>
            <SignupComponent></SignupComponent>
            <Footer></Footer>
        </div>
      )
}
  
export default SignupPage;
