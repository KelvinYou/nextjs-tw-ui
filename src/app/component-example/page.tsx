import React from 'react'
import FancyTestimonialSliderPage from './_components/FancyTestimonialsSliderPage'
import LogoCarouselPage from './_components/LogoCarouselPage'

export const metadata = {
  title: 'Component Example by Kelvin You',
  description: 'Page description',
}

const ComponentExamplePage = () => {
  return (
    <>
      <FancyTestimonialSliderPage />

      <LogoCarouselPage />
    </>
  )
}

export default ComponentExamplePage