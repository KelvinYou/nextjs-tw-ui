import FeatureComparisonPricing from '@/components/PricingTable/FeatureComparisonPricing'
import PricingTable from '@/components/PricingTable/PricingTable'
import React from 'react'

const PricingPage = () => {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <PricingTable />
        </div>
      </main>

      <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <FeatureComparisonPricing />
        </div>
      </main>
    </>
  )
}

export default PricingPage