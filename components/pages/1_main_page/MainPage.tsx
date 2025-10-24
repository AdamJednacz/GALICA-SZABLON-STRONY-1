"use client"
import React from 'react'
import Hero from './1_hero/Hero'
import Offer from './2_offer/Offer'
import Gallery from './3_gallery/Gallery'
import Attractions from './4_attractions/Attractions'
import AboutUs from './5_about_us/AboutUs'
import Contact from './6_contact/Contact'

const MainPage = () => {
  return (
    <>
        <Hero/>
        <Offer/>
        <Gallery/>
        <Attractions/>
        <AboutUs/>
        <Contact/>
    </>
  )
}

export default MainPage