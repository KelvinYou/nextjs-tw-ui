import React from 'react'
import FancyTestimonialSliderPage from './_components/FancyTestimonialsSliderPage'
import LogoCarouselPage from './_components/LogoCarouselPage'
import AccordionPage from './_components/AccordionPage'
import PricingTablePage from './_components/PricingTablePage'
import RotatingWordsPage from './_components/RotatingWordsPage'
import ModalVideoPage from './_components/ModalVideoPage'
import SpotlightPage from './_components/SpotlightPage'

export const metadata = {
  title: 'Component Example by Kelvin You',
  description: 'Page description',
}

const ComponentExamplePage = () => {
  return (
    <>
      <FancyTestimonialSliderPage />

      <LogoCarouselPage />

      <AccordionPage />

      <PricingTablePage />

      <RotatingWordsPage />

      <ModalVideoPage />

      <SpotlightPage />
    </>
  )
}

export default ComponentExamplePage