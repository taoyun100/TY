import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PhotoGallery } from "@/components/photo-gallery"
import { VideoSection } from "@/components/video-section"
import { IMAGES } from "@/lib/constants"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={IMAGES.heroVideo} type="video/mp4" />
        </video>
        <div className="relative z-20 h-full flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-light text-gray-200 mb-2">
                Tao & Yun
              </h2>
              <div className="w-24 h-px bg-white/50 mx-auto"></div>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-gray-200">
              A Journey of Love
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 space-y-32 py-32">
        {/* 简介部分 */}
        <section className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <Avatar className="w-24 h-24 ring-4 ring-white/10">
                <AvatarImage src={IMAGES.couple.he} alt="新郎" />
                <AvatarFallback>新郎</AvatarFallback>
              </Avatar>
              <Avatar className="w-24 h-24 ring-4 ring-white/10">
                <AvatarImage src={IMAGES.couple.she} alt="新娘" />
                <AvatarFallback>新娘</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-gray-400 leading-relaxed text-lg">
                在这里书写你们的爱情故事...
                每一天都是新的开始，每一刻都值得珍藏。
              </p>
            </div>
          </div>
          <div className="relative aspect-square rounded-3xl overflow-hidden">
            <Image
              src={IMAGES.wedding[0].src}
              alt="Featured Photo"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* 时间线部分 */}
        <section className="relative">
          <div className="absolute left-1/2 h-full w-px bg-white/10" />
          <div className="space-y-24">
            {[
              { date: "2023.01.01", event: "相识", description: "我们的故事从这里开始..." },
              { date: "2023.06.01", event: "订婚", description: "许下永恒的承诺..." },
              { date: "2023.12.25", event: "结婚", description: "携手走向未来..." },
            ].map((moment, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <div className="text-2xl font-bold mb-2">{moment.date}</div>
                  <h3 className="text-xl text-gray-200 mb-2">{moment.event}</h3>
                  <p className="text-gray-400">{moment.description}</p>
                </div>
                <div className="w-4 h-4 rounded-full bg-white relative z-10" />
                <div className="flex-1" />
              </div>
            ))}
          </div>
        </section>

        {/* 照片画廊 */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Our Moments</h2>
          <PhotoGallery />
        </section>

        {/* 视频部分 */}
        <section>
          <h2 className="text-3xl font-bold mb-12 text-center">Wedding Film</h2>
          <VideoSection />
        </section>
      </div>
    </main>
  )
}
