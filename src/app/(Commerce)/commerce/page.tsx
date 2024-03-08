import { Metadata } from 'next'
import CommerceComponent from './_commerceComponent'

export const metadata: Metadata = {
  title: 'Ivydale Blog',
  description: 'Generated by create next app',
}

const LandingPage = () => {
    return (
      <div>
        <CommerceComponent></CommerceComponent>
      </div>
    )
  }

export default LandingPage;