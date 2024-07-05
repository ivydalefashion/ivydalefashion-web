'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../_styles/brandComponent.module.scss'
// import MainNavbar from './components/navbar/MainNavbar'
// import ImageCard from './components/reusables/ImageCard'
// import logo from '../public/adidasLogo.png'
// import adidaslogo from '../../../../public/adidasLogo.png'
import ImageCard from '../_components/ImageCard'
import ResponsiveImage from '../_components/ResponsiveImage'


const BrandComponent = () => {
     let adidasLogo = '/adidasLogo.png'
    
  return (
            <Container className={styles.container}>
                <Row className={styles.brandHeaderRow}>

                    <Col className={styles.logoCol} lg={4} md={4} sm={12}>
                        {/* <Image 
                            className={`card-img-top`}
                            src={adidaslogo}
                            alt="Picture of the author"
                            width={400}
                            height={300} 
                            
                        /> */}
                        <ResponsiveImage src={adidasLogo} alt='water' width={100} height={100}></ResponsiveImage>
                </Col>

                    <Col className={styles.detailsCol} lg={8} md={8} sm={12}>
                        <Row style={{width: '100%'}}>
                            <h3>ADIDAS</h3>
                        </Row>
                        <br/>
                        
                        <Row>
                        <p>xxxxxxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </Row>
                       
                    </Col>

                </Row>

                <Row className={styles.secondaryRow}>

                    <Col className={styles.categoriesCol} lg={2} md={2} sm={12}>

                        <ul className="list-group list-group-flush ">
                            <li className="list-group-item ">SHIRTS
                            <span className="badge badge-primary badge-pill">14</span>
                            </li>

                            <li className="list-group-item">HOODIES
                            <span className="badge badge-primary badge-pill">14</span>
                            </li>
                           
                        </ul>
                    </Col>

                    <Col className={styles.imagesCol} lg={10} md={10} sm={12}>
                       <ImageCard></ImageCard>
                       <ImageCard></ImageCard>
                       <ImageCard></ImageCard>
                       <ImageCard></ImageCard>
                       <ImageCard></ImageCard>
                    </Col>
                </Row>
            </Container>
  )
}

export default BrandComponent;
