'use client'

import { Container, Row, Col } from 'react-bootstrap'
import styles from '../_styles/brandComponent.module.scss'
import ImageCardLogos from '../_components/ImageCardLogos'
import ResponsiveImage from '../_components/ResponsiveImage'

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
                <ResponsiveImage src={adidasLogo} alt='water' width={100} height={100}></ResponsiveImage>
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
