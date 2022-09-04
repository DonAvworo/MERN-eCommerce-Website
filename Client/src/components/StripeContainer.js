import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import {Checkout} from './pages/Checkout'

const publicKey = "pk_test_51LbFtyIbkVz73ZrSygi1E33lW2LJ3Fjcyjns3YOsVBra8Fk5ExvR3s046ivRe6IA1xpfL930lHfJZ3t0YWPZ0ON700zbvInyso"

const stripeTestPromise = loadStripe(publicKey)
export default function StripeContainer() {
    return (
        <Elements stripe={stripeTestPromise}>
            <Checkout />
        </Elements>
    )
}