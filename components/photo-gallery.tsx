"use client"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { useState, useEffect } from "react"
import { IMAGES } from "@/lib/constants"

interface Photo {
  id: number
  src: string
  alt: string
  date: string
}

export function PhotoGallery() {
  const photos = IMAGES.wedding
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)
  const [api, setApi] = useState<any>(null)

  useEffect(() => {
    if (!api) return

    // 自动播放逻辑
    const interval = setInterval(() => {
      api.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [api])

  return (
    <div className="space-y-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {photos.map((photo) => (
            <CarouselItem 
              key={photo.id} 
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <div 
                className="relative overflow-hidden rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedPhoto(photo)}
              >
                <AspectRatio ratio={1}>
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm">{photo.date}</p>
                  </div>
                </AspectRatio>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>

      {/* 照片预览模态框 */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1920}
              height={1080}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
} 