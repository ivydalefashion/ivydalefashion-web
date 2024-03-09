'use client'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../_styles/brandComponent.module.scss'
import ImageCardLogos from '../_components/ImageCardLogos'


const BrandsComponent = () => {
    
    let adidasLogo = '/adidasLogo.png'
    let nikeLogo = '/nikelogo.png'
    let dickiesLogo = '/dickieslogo.png'
    let pumaLogo = '/pumalogo.png'

  return (
    <Container className={styles.container}>
        <Row className={styles.titleRow}>
            SHOP LOCAL AND INTERNATIONAL BRANDS
        </Row>
        
        <Row className={styles.logosRow}>
            <Col lg='4' md='4' sm='12' >
                <ImageCardLogos brandName={adidasLogo}></ImageCardLogos>
                <ImageCardLogos brandName={nikeLogo}></ImageCardLogos>
                {/* <ImageCardLogos brandName={dickiesLogo}></ImageCardLogos> */}
                <ImageCardLogos brandName={pumaLogo}></ImageCardLogos>
            </Col>
        </Row>
    </Container>
  )
}

export default BrandsComponent;
