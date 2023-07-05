'use client'
import Link from "next/link";
import Image from "next/image";
import productImage from '../../../../public/adidasMANU.jpg'
import styles from './_styles_components/ImageCard.module.scss'

// seems like the width prop gets automated, i just set the height..

const ImageCard = () =>{
    return (
        <div className={`card ${styles.cardImage}`} style={{width: '260px'}}>
            <Image 
                className={`card-img-top `}
                src={productImage}
                alt="Picture of the author"
                // width={400}
                height={300} 
                
            />
            <div className={`card-body ${styles.cardBody}`}>
                <h5 className={`card-title ${styles.titleText}`}>Manchester united jersey 2022 Away</h5>
                <p className={`card-text ${styles.priceText}`}>R600</p>
               
            </div>
        </div>
    )
}

export default ImageCard;

