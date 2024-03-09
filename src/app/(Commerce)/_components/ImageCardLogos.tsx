"use client";
import Link from "next/link";
import Image from "next/image";
import Styles from './_styles_components/ImageCardLogos.module.scss'
import { Card, ListGroup } from "react-bootstrap";

// This component holds the images displayed on the brands page:
const ImageCardLogos = (props:any) =>{
    return (
        <Card>
            <Image 
                className={`card-img-top`}
                src={props.brandName}
                alt="Picture of the author"
                width={100}
                height={100} 
            />
        </Card>
    )
}

export default ImageCardLogos;

