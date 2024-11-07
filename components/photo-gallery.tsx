"use client"

import { Card } from "@/components/ui/card"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import Image from "next/image"
import { useState } from "react"
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

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo) => (
          <Card 
            key={photo.id}
            className="overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200"
            onClick={() => setSelectedPhoto(photo)}
          >
            <AspectRatio ratio={1}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </AspectRatio>
            <div className="p-2 text-center text-sm text-slate-600">
              {photo.date}
            </div>
          </Card>
        ))}
      </div>

      {/* 照片预览模态框 */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full h-auto">
            <Image
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              width={1200}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
} 