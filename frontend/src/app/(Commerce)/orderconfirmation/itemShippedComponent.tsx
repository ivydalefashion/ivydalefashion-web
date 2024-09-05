'use client';

// components/ItemsShipped.js
import { Table } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import styles from '../_styles/orderconfirmationComponent.module.scss';

interface Item {
	name: string;
	quantity: number;
	price: number;
	size: number;
	subTotal: number;
	delivery: any;
	total: any;
}

interface ItemShippedProps {
	isLoading: Boolean;
	items: Item[];
}

const ItemsShipped: React.FC<ItemShippedProps> = ({ isLoading, items }) => {
	return (
		<div className={styles.itemsContainer}>
			{/* <h2>ITEMS SHIPPED</h2> */}
			<Table bordered>
				<thead>
					<tr>
						<th>ITEMS SHIPPED</th>
						<th>QTY</th>
						<th>PRICE</th>
					</tr>
				</thead>
				<tbody>
					{isLoading ? (
						<tr>
							<td colSpan={3}>
								<Skeleton height={100} />
							</td>
						</tr>
					) : (
						items.map((item, index) => (
							<tr key={index}>
								<td>
									<img
										src="/noctahoodie.jpg"
										alt={item.name}
										className={styles.productImage}
									/>
									<div>
										<strong>{item.name}</strong>
										<p>SIZE : {item.size}</p>
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
								<td></td>
								<td className="text-right">Sub-Total</td>
								<td>100</td>
							</tr>

							<tr>
								<td></td>
								<td className="text-right">Delivery</td>
								<td>200</td>
							</tr>
							<tr>
								<td></td>
								<td className="text-right">
									<strong>TOTAL</strong>
								</td>
								<td>
									<strong>300</strong>
								</td>
							</tr>
						</>
					)}
				</tfoot>
			</Table>
		</div>
	);
};

export default ItemsShipped;
