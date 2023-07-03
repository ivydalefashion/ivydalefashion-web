'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import styles from '../_styles/signupComponent.module.scss'
import { Form,Button } from 'react-bootstrap'



const SignupComponent = () => {
    const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => {
		// //${process.env.REACT_APP_SERVER}/signup`
		// console.log(data);
		// Axios.post(`http://localhost:8024/signup`, {
		// 	firstname: data.firstname,
		// 	lastname: data.lastname,
		// 	email: data.email,
		// 	password: data.password,
		// })
		// 	.then((res) => {
		// 		console.log(res.data);

		// 		if (res.data.success === true) {
		// 			let localStorageDataObject = {
		// 				id: res.data.data.id,
		// 				firstname: res.data.data.firstname,
		// 				lastname: res.data.data.lastname,
		// 				email: res.data.data.email,
		// 			};
		// 			SetLocalStorage("randnoteUser", localStorageDataObject);
		// 			router.push("/transactions");
		// 		}
		// 	})
		// 	.catch((err) => {
		// 		console.log(err);
		// 	});
	};

  return (
    <div>
      
            <div className={`container ${styles.mainContainer} `}>

                <div className={`row`}>
                    <h2 className={` ${styles.primaryLabel}`}>Log in.</h2>
                    <label className={`${styles.secondaryLabel}`}>Please enter your email and password</label>
                </div>

                <div className={`row`}>
                    <form className={` ${styles.mainForm}`}>

                        <Form.Group>
                            <input
                                className={`form-control shadow-none ${styles.input} ${styles.firtnameInput}`}
                                type="text"
                                name="firstname"
                                placeholder='first name'
                            />
                        </Form.Group>
                        <Form.Group>
                            <input
                                className={`form-control shadow-none ${styles.input} ${styles.lastnameInput}`}
                                type="email"
                                name="email"
                                placeholder='last name'
                            />
                        </Form.Group>

                        <Form.Group>
                            <input
                                className={`form-control shadow-none ${styles.input} ${styles.emailInput}`}
                                type="email"
                                name="email"
                                id=""
                                placeholder='email address'
                                
                            />
                        </Form.Group>
                    
                        <Form.Group>
                            <div className="input-group">
                                <input
                                    className={`form-control shadow-none ${styles.input} ${styles.passwordInput}`}
                                    type="password"
                                    name="password"
                                    id=""
                                    placeholder='password'
                                    
                                />
                                <button type="button" className={`input-group-text ${styles.forgotPasswordButton}`} id="basic-addon2">forgot password?</button>
                            </div>
                        </Form.Group>

                        <Button
                            type="submit"
                        
                            className={`${styles.loginButton}`}
                        >
                            SIGN UP
                        </Button>

                        <br />

                        <Link  href="signup">
                            <p className={styles.createAccountLink}>Already have an account? <span>Sign in</span></p>
                            
                        </Link>
                    </form>
                </div>
            </div>
           
        
    </div>
  )
}

export default SignupComponent;
