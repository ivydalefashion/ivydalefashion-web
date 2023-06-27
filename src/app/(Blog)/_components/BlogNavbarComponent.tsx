"use client"
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './_styles_components/blogNavbarComponent.module.scss'

const BlogNavbarComponent = () =>{  
    return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='justify-content-center'>
        <Navbar.Brand className={styles.navbarBrand}><li><Link className={styles.navbarBrandLink} href='/home'>IVY</Link></li></Navbar.Brand>
       
      </Container>
    </Navbar>
  );
}

export default BlogNavbarComponent;