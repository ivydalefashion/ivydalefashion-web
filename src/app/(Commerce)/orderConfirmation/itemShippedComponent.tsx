'use client'

// components/ItemsShipped.js
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../_styles/orderconfirmationComponent.module.scss';

const ItemsShipped = ({ isLoading, items }) => {
  return (
    <div className={styles.itemsContainer}>
      <h2>ITEMS SHIPPED</h2>
      <Table borderless>
        <thead>
          <tr>
            <th></th>
            <th>QTY</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            <tr>
              <td colSpan="3"><Skeleton height={100} /></td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td>
                  <img src="/path-to-image.jpg" alt={item.name} className={styles.productImage} />
                  <div>
                    <strong>{item.name}</strong>
                    <p>{item.size}</p>
                  </div>
                </td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
              </tr>
            ))
          )}
        </tbody>
        <tfoot>
          {!isLoading && (
            <>
              <tr>
                <td colSpan="2" className="text-right">Sub-Total</td>
                <td>{items[0].subTotal}</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-right">Delivery</td>
                <td>{items[0].delivery}</td>
              </tr>
              <tr>
                <td colSpan="2" className="text-right"><strong>TOTAL</strong></td>
                <td><strong>{items[0].total}</strong></td>
              </tr>
            </>
          )}
        </tfoot>
      </Table>
    </div>
  );
};

export default ItemsShipped;