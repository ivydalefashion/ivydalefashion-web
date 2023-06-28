'use client'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '../_styles/blog.module.scss' // styling
import Image from 'next/image'


const BlogPostsComponent = () => {
  return (
    <main>
        <Container className={styles.titleContainer}>
            <h3> all things fashion...</h3>
        </Container>

        <Container className={styles.mainContainer}>
            
                <Row>
                    <Col xs={6} md={4}>
                    {/* <Image src="/thumbnail.png"  /> */}
                    </Col>
                    
                    <Col xs={6} md={4}>
                    {/* <Image src="/thumbnail.png" /> */}
                    </Col>
                </Row>
           
        </Container>
    </main>
  )
}

export default BlogPostsComponent;
