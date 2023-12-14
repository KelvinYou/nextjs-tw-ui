import RotatingWords from '@/components/RotatingWords'
import React from 'react'

const RotatingWordsPage = () => {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-900 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">

            <RotatingWords />

          </div>
        </div>
      </main>
    </>
  )
}

export default RotatingWordsPage