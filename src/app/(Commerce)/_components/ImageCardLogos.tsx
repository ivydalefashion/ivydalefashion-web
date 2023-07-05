import Link from "next/link";
import { Card, Button } from "react-bootstrap";
// import Image from "react-bootstrap";
import Image from "next/image";

import adidasLogo from '../../../public/adidasLogo.png'
import styles from '../../../styles/reusables/ImageCard.module.scss'



const ImageCardLogos = (props:any) =>{
    return (
        <div className={`card ${styles.cardImage}`} style={{width: '260px'}}>
            <Image 
                className={`card-img-top`}
                src={props.brandName}
                alt="Picture of the author"
                // width={600}
                // height={500} 
                
            />
           
        </div>
    )
}

export default ImageCardLogos;

