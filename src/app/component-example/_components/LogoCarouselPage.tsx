import LogoCarousel from '@/components/LogoCarousel'
import React from 'react'

import Facebook from '/public/assets/logos/facebook.svg'
import Disney from '/public/assets/logos/disney.svg'
import Airbnb from '/public/assets/logos/airbnb.svg'
import Apple from '/public/assets/logos/apple.svg'
import Spark from '/public/assets/logos/spark.svg'
import Samsung from '/public/assets/logos/samsung.svg'
import Quora from '/public/assets/logos/quora.svg'
import Sass from '/public/assets/logos/sass.svg'

const LogoCarouselPage = () => {
  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Disney, alt: 'Disney' },
    { src: Airbnb, alt: 'Airbnb' },
    { src: Apple, alt: 'Apple' },
    { src: Spark, alt: 'Spark' },
    { src: Samsung, alt: 'Samsung' },
    { src: Quora, alt: 'Quora' },
    { src: Sass, alt: 'Sass' },
  ]

  return (
    <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="text-center">

          <LogoCarousel 
            logos={logos}
          />

        </div>
      </div>
    </main>
  )
}

export default LogoCarouselPage