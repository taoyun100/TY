import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { PhotoGallery } from "@/components/photo-gallery"
import { IMAGES } from "@/lib/constants"

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-pink-50 to-slate-100">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* 头部介绍卡片 */}
        <Card className="border-none shadow-lg">
          <CardHeader className="flex flex-col items-center space-y-4">
            <div className="flex gap-4">
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src={IMAGES.couple.he} 
                  alt="新郎" 
                />
                <AvatarFallback>新郎</AvatarFallback>
              </Avatar>
              <Avatar className="w-32 h-32">
                <AvatarImage 
                  src={IMAGES.couple.she} 
                  alt="新娘" 
                />
                <AvatarFallback>新娘</AvatarFallback>
              </Avatar>
            </div>
            <div className="text-center">
              <h1 className="text-3xl font-bold text-pink-600">Our Love Story</h1>
              <p className="text-slate-600">Together Since 2023</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-pink-600">Our Story</h2>
              <p className="text-slate-600 leading-relaxed">
                在这里书写你们的爱情故事...
                每一天都是新的开始，每一刻都值得珍藏。
              </p>
            </div>
          </CardContent>
        </Card>

        {/* 重要时刻时间线 */}
        <Card className="border-none shadow-lg p-6">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Special Moments</h2>
          <div className="space-y-4">
            {[
              { date: "2023.01.01", event: "相识" },
              { date: "2023.06.01", event: "订婚" },
              { date: "2023.12.25", event: "结婚" },
            ].map((moment, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-pink-600 font-medium w-24">{moment.date}</div>
                <div className="h-2 w-2 rounded-full bg-pink-400"></div>
                <div className="text-slate-600">{moment.event}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* 照片画廊 */}
        <Card className="border-none shadow-lg p-6">
          <h2 className="text-xl font-semibold text-pink-600 mb-4">Our Photos</h2>
          <PhotoGallery />
        </Card>
      </div>
    </main>
  )
}
