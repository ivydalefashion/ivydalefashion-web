"use client"

import Link from 'next/link'
import {Container} from 'react-bootstrap'

export default function HomeComponent() {

    return(
        <div>
            <Container>
                <h4>Theoratically, this home page should take you to the Landing page.... <Link style={tempStyleDecoration} href="/commerce">Commerce</Link></h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/">Home</Link>
                </h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/cart">Cart</Link>
                </h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/brand">1 Brand</Link>
                </h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/signin">Sign in</Link>
                </h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/profile">Profile page</Link>
                </h4>

                <h4 style={tempStyleDecoration}>
                    <Link href="/signup">Sign up</Link>
                </h4>
            </Container>
        </div>
    )

}

const tempStyleDecoration = {
    'color': 'blue',
    'textDecoration': 'underline'
}