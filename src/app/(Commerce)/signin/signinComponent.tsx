'use client';
import Link from 'next/link'
import {Form, Button} from 'react-bootstrap'
import styles from '../_styles/signinComponent.module.scss'

const SinginComponent = () => {
    return (
        <div className={`container ${styles.mainContainer} `}>

            <div className={`row`}>
                <h2 className={` ${styles.primaryLabel}`}>Log in.</h2>
                <label className={`${styles.secondaryLabel}`}>Please enter your email and password</label>
            </div>

            <div className={`row`}>
                <form className={` ${styles.mainForm}`}>
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
                        LOGIN
                    </Button>


                    <br />

                    <Link  href="signup">
                        <p className={styles.createAccountLink}>New customer? <span>Create an account</span></p>
                        
                    </Link>
                </form>
            </div>
        </div>    
      )
}
  
export default SinginComponent;
