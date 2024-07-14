'use client'


import React,{ useState } from "react";
import { Alert, Button, Col, Row, Container } from "react-bootstrap";
import styles from './_styles_components/DismissableAlert.module.scss' // styles


export type alertProps = {
	color: string ;
	information: string;
};


const AlertDismissible = (props: alertProps) => {
	const [show, setShow] = useState(true);

	return (
		
			// <Alert show={show} className={` ${styles.alert} ${props.color === 'green' ? styles.success : styles.error}`}>
            //     <Container>

                
            //         <Row className={styles.informationRow}>
            //             <Col className={styles.informationCol} lg='10' md='10' sm='10'>
            //                 {/* <p>{props.information}</p> */}
            //                 <p>water</p>
            //             </Col>

            //             {/* <Col  className={styles.buttonCol} lg='2' md='2' sm='2'>
            //                 <Button
            //                     onClick={() => setShow(false)}
            //                     // variant="outline-success"
            //                     className={` ${styles.button} ${props.color === 'green' ? styles.buttonSuccess : styles.buttonError}`}
            //                 >
            //                     X
            //                 </Button>
            //             </Col> */}
            //         </Row>
            //     </Container>
			// </Alert>

            <Alert variant="warning" className={` ${styles.alert} ${props.color === 'green' ? styles.success : styles.error}`} onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Oops! Looks like we have an error</Alert.Heading>
                    <p>
                    {props.information}
                    </p>
            </Alert>

	
	);
};

export default AlertDismissible;