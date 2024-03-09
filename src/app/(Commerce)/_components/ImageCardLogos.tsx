import Link from "next/link";
import Image from "next/image";
import Styles from './_styles_components/ImageCardLogos.module.scss'


const ImageCardLogos = (props:any) =>{
    return (
        <div className={`card ${Styles.cardImage}`} style={{width: '260px'}}>
            <Image 
                className={`card-img-top`}
                src={props.brandName}
                alt="Picture of the author"
                width={400}
                height={400} 
            />
        </div>
    )
}

export default ImageCardLogos;

