'use client'

// components/OrderSummary.js
import { Row, Col } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../_styles/orderconfirmationComponent.module.scss';

const OrderSummary = ({ isLoading, orderData }) => {
  return (
    <div className={styles.summaryContainer}>
      <Row>
        <Col md={6}>
          <h2>Summary</h2>
          {isLoading ? (
            <>
              <Skeleton count={3} />
            </>
          ) : (
            <>
              <p>Order No: {orderData.orderNumber}</p>
              <p>Order Date: {orderData.orderDate}</p>
              <p>Order Total: {orderData.orderTotal}</p>
            </>
          )}
        </Col>
        <Col md={6}>
          <h2>Shipping Address</h2>
          {isLoading ? (
            <Skeleton count={3} />
          ) : (
            <p>
              {orderData.shippingAddress.street}<br />
              {orderData.shippingAddress.city}<br />
              {orderData.shippingAddress.postalCode}
            </p>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default OrderSummary;