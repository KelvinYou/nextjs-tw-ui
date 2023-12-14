import ModalVideo from '@/components/ModalVideo'
import React from 'react'
import VideoThumb from '/public/assets/demo/modal-video-thumb.jpg'

const ModalVideoPage = () => {
  return (
    <>
      <main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex justify-center">

            <ModalVideo
              thumb={VideoThumb}
              thumbWidth={768}
              thumbHeight={432}
              thumbAlt="Modal video thumbnail"
              video="/assets/demo/video.mp4"
              videoWidth={1920}
              videoHeight={1080} />

          </div>
        </div>
      </main>
    </>
  )
}

export default ModalVideoPage