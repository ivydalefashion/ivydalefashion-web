'use clinet'; 
import {Navbar , Container, Nav, NavDropdown} from 'react-bootstrap'
import styles from './_styles_components/HeaderMini.module.scss'

const MiniNavbar = () =>{
    return (

        <nav className={`navbar ${styles.navbarContainerStyles}`}>
            <div className="container-fluid justify-content-center ">
                <span className={`navbar-brand ${styles.navbarBrandStyle}`}>
                IVY
                </span>
            </div>
        </nav>
    )
}




export default MiniNavbar;