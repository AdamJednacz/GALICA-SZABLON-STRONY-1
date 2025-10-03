import React from 'react'
import Hero from './1_Hero/Hero'
import FAQ from './2_FAQ/FAQ'
import ContactComponent from '../../contact_component/ContactComponent'

const Contact = () => {
  return (
        <>
            <Hero/>
    <ContactComponent h2='Jeżeli masz pytania skontatkuj się z nami !'/>
    <FAQ/>
        </>
  )
}

export default Contact