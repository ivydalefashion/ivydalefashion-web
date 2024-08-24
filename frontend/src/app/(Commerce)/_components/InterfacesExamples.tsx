import { Order } from "./Interfaces"

const AddressExample = {
    street: '20 Marshall street',
    city: 'Polokwane',
    province: 'Limpopo',
    zipCode: '0699',
    country: 'South Africa'
}

// In this example, we have 2 products in this cart:
const cartExample = [
    {
        product: {
            id: 'rlei443',
            name: 'Manchester united home kit 2020',
            description: 'This is the Manchester united kit for home for the upcoming 2020/2021 season that the players will wear at old trafford.';
            price: 500,
            images: ['/adidasMANU.jpg', '/adidasMANU.jpg', '/adidasMANU.jpg', '/adidasMANU.jpg'],
            category: 'Sportswear',
            stock: 10,
            brand: 'Adidas Performance'
        },
        quantity: 3,
        selectedSize: 'XL',
    }, 
    {
        product: {
            id: 'rlei443',
            name: 'Manchester united home kit 2020',
            description: 'This is the Manchester united kit for home for the upcoming 2020/2021 season that the players will wear at old trafford.';
            price: 500,
            images: ['/adidasMANU.jpg', '/adidasMANU.jpg', '/adidasMANU.jpg', '/adidasMANU.jpg'],
            category: 'Sportswear',
            stock: 10,
            brand: 'Adidas Performance'
        },
        quantity: 3,
        selectedSize: 'XL',
    }
]

// One order:
const orderExample = [
	{
		id: '',
		customer: {
			id: '',
			name:'John Doe',
			email: 'johndoe@example.com',
			phonenumber: '123456789'
		},
		cart: cartExample,
		totalAmount: 3000,
		deliveryStatus: 'Processing',
		shippingAddress: AddressExample,
		billingAddress: AddressExample,
		paymentMethod: 'mastercard',
		createdAt: Date,
		updatedAt: Date,
	}
]

export {cartExample, orderExample}
