'use client'
import {Navbar , Container, Nav, NavDropdown} from 'react-bootstrap'
import Link from 'next/link';
import styles from './_styles_components/Header.module.scss'
import { FaSearch,FaUserAlt,FaShoppingCart,FaHeart } from 'react-icons/fa';

const MainNavbar = () =>{
    
    return (
        <Navbar fixed="top" className={`${styles.navBar}`} bg="light" expand="lg">
            <Container>
                <Navbar.Brand className={styles.navBarBrand} href="#home">IVY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link ><Link  href="explore">Explore</Link></Nav.Link>
                    <Nav.Link> <Link  href="brands">Brands</Link></Nav.Link>
                    <Nav.Link><Link href="blog">Blog</Link></Nav.Link>
                    <NavDropdown title="Category" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Shoes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Pants</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Jackets</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Men</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Women</NavDropdown.Item>
                    </NavDropdown>
                </Nav>

                <Nav className="me-auto">
                    <div className="input-group">
                        <input className={`form-control shadow-none ${styles.searchBar}`} type="text" placeholder='Search brands/categories/products' aria-label="Search brands/categories/products" aria-describedby="basic-addon2"/>
                        <span className={`input-group-text ${styles.searchButtonSpan}`} id="basic-addon2"><FaSearch></FaSearch></span>
                    </div> 
                </Nav>

                <Nav className={styles.navNavigationIcons}>
                    <Nav.Link className={styles.navNavigationIconsNavLink} >
                        <section>
                        <Link  href="/wishlist"><FaHeart></FaHeart></Link>
                        </section>
                       
                    </Nav.Link>
                    <Nav.Link className={styles.navNavigationIconsNavLink} eventKey={2} >
                        <section>
                     <Link  href="/profile"><FaUserAlt></FaUserAlt></Link>
                        </section>
                       
                    </Nav.Link>
                    <Nav.Link className={styles.navNavigationIconsNavLink} eventKey={3} >
                        <section>
                            <Link  href="/cart"><FaShoppingCart></FaShoppingCart></Link>
                            </section>
                         
                    </Nav.Link>
                </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default MainNavbar;