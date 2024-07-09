'use client'
import React from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../_styles/commerceComponent.module.scss';

const CommerceComponent: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <div className={styles.carouselImage} style={{backgroundImage: 'url("/nikeBanner.webp")'}}>
            <div className={styles.carouselCaption}>
              <h1>STREET FASHION REDEFINED</h1>
              <button className={styles.shopButton}>SHOP BRANDS</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselImage} style={{backgroundImage: 'url("/nikeBanner.webp")'}}>
            <div className={styles.carouselCaption}>
              <h1>URBAN STYLE UNLEASHED</h1>
              <button className={styles.shopButton}>EXPLORE NOW</button>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className={styles.carouselImage} style={{backgroundImage: 'url("/nikeBanner.webp")'}}>
            <div className={styles.carouselCaption}>
              <h1>BOLD LOOKS, BOLD STATEMENTS</h1>
              <button className={styles.shopButton}>DISCOVER MORE</button>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div className={styles.newArrivals}>
        <h2>NEW ARRIVALS</h2>
        {/* Add new arrivals content here */}
      </div>
    </div>
  );
};

export default CommerceComponent;