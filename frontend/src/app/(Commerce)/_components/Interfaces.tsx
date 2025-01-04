interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	images: string[];
	category: string;
	stock: number;
	brand: string;
}

interface CartItem {
	product: Product;
	quantity: number;
	selectedSize: string;
	selectedColor?: string; // If applicable
}

type Cart = CartItem[];

type DeliveryStatus = 'Pending' | 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';

interface Address {
	street: string;
	city: string;
	province: string;
	zipCode: string;
	country: string;
}

interface Customer {
	id: string;
	name: string;
	email: string;
	phoneNumber: string;
}

interface Order {
	id: string;
	customer: Customer;
	cart: Cart;
	totalAmount: number;
	deliveryStatus: DeliveryStatus;
	shippingAddress: Address;
	billingAddress: Address;
	paymentMethod: string;
	createdAt: Date;
	updatedAt: Date;
}

interface Payment {
	id: string;
	orderId: string;
	amount: number;
	method: 'Credit Card' | 'PayPal' | 'Bank Transfer';
	status: 'Pending' | 'Completed' | 'Failed';
	transactionId: string;
}

export type { CartItem, Cart, Order, DeliveryStatus, Address, Customer, Product, Payment };
