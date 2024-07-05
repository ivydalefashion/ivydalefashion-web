'use client'

import Image from 'next/image'
import { Container, Row,Col, Button } from 'react-bootstrap'
import styles from '../_styles/cartComponent.module.scss'
import productPicture from '../../../../public/adidasMANU.jpg'


const testData = [
{
	id: 1,
  	name: "Adidas Manchester united 2022 Away shirt",
  	size: "small",
  	image: "url",
  	price: 500,
  	quantity: 2
},
{
	id:2,
	name: "Adidas Manchester united 2022 Away shirt",
	size: "small",
	image: "url",
	price: 500,
	quantity: 2
  },
  {
	id: 3,
	name: "Adidas Manchester united 2022 Away shirt",
	size: "small",
	image: "url",
	price: 200,
	quantity: 2
  },
]

const CartComponent = () => {
  	return (
		<Container className={` ${styles.mainContainer}`}>
		{
			testData.length>0 ? 
				(
				<div >
					<table className={`table table-bordered ${styles.table}`}>
					<tbody>
						{testData.map((data: any)=>(
					
							<tr key={data.id}>
								<td scope="row" className={styles.imageTD}>
									<Image
										src={productPicture}
										alt="Picture of the author"
										width={140}
										height={140} 
										// blurDataURL="data:..." automatically provided
										// placeholder="blur" // Optional blur-up while loading
										// test
									/>
								</td>

								<td className={styles.descriptionTD}>
									<Container className={styles.descriptionContainer}>
										<Row>
											<Col lg={10} md={10} sm={10}>
												<Row>
													<p className={styles.name}>Skull hoodie</p>
												</Row>

												<Row>
													<p className={styles.size}>SMALL</p>
												</Row>

												
											</Col>

											<Col  lg={2} md={2} sm={2}>
												X2
											</Col>
										</Row>
									</Container>
									
								</td>

								<td className={styles.priceTD}>
                                    <Row>
                                        <Col lg={6} md={6} sm={6}>
                                            {data.price}
                                        </Col>
                                        
                                        <Col  lg={6} md={6} sm={6}>
                                            X
                                        </Col>
                                    </Row>
                                    
                                </td>
							</tr>
							
						))}
					</tbody>
						
					</table>

					<Row className={styles.checkoutButtonRow}>
						<Button>
							checkout
						</Button>
					</Row>
				</div>
				)
			: "You do not have anything in your cart"
		}
	</Container>
  	)
}

export default CartComponent;
