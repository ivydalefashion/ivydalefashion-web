'use client'
import { Container, Col, Row } from 'react-bootstrap';
import styles from './_styles_components/Footer.module.scss'
import { FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';

const Footer = () =>{
    return (
        <div className={` ${styles.footer}`}>
           <Container>
               <Row className={``}>
                   <Col lg={10} md={10} sm={12}>
                        <Row>
                            <Col lg={10} md={10} sm={12}>
                                <Row>
                                    {/* Here are the cols for the Logo, community and company */}
                                    <Col lg={4} md={4} sm={12} className={styles.ivyLogoCol} >
                                        <h1 className={styles.ivyLogo}>IVY</h1>
                                    </Col>

                                    <Col lg={3} md={3} sm={12}>
                                        <h4>Community</h4>
                                        <p>Featured artists</p>
                                        <p>Portal</p>
                                        <p>Live events</p>
                                    </Col>

                                    <Col lg={3} md={3} sm={12}>
                                        <h4>Company</h4>
                                        <p>About Us</p>
                                        <p>Contact US</p>
                                        <p>History</p>
                                    </Col>
                                </Row>
                            </Col>

                            <Col  lg={2} md={2} sm={0}>
                                {/* intentionally left empty */}
                            </Col>
                        </Row>
                        <hr className={styles.hr}></hr>

                        <Row>
                            <p>@IVYDALE 2022. We love our users!</p>
                        </Row>
                   </Col> 

                   <Col lg={2} md={2} sm={12} className={styles.socialMediaCol}>
                    <Row className={styles.socialMediaRow}> <FaFacebook  /></Row>
                    <Row className={styles.socialMediaRow}> <FaInstagram > </FaInstagram></Row>
                    <Row className={styles.socialMediaRow}> <FaTwitter></FaTwitter></Row>
                   </Col>

                    
               </Row>
           </Container>
        </div>
    )
}

export default Footer;