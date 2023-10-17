import VideoThumb from '@/public/images/hero-image-01.jpeg'
import ModalVideo from '@/components/modal-video'

export default function Hero() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">

        

        {/* Hero content */}
        <div className="relative pt-32 pb-10 md:pt-40 md:pb-16">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 mb-4" data-aos="fade-up">Aviral Digital Solutions</h1>
            <p className="text-xl text-gray-400 mb-8" data-aos="fade-up" data-aos-delay="200">Welcome to our digital heaven where languages unite and barriers dissolve. At Aviral Digital Solutions, we are not just translators, we are architects of understanding in a diverse world. With our linguistic competence, we bridge cultures, empower businesses and amplify global connections. </p>
            
           
          </div>

          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>

      </div>
    </section>
  )
}
