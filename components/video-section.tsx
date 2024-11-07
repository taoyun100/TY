"use client"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Card } from "@/components/ui/card"
import { IMAGES } from "@/lib/constants"

export function VideoSection() {
  return (
    <Card className="overflow-hidden bg-black/50 backdrop-blur-sm border-white/10">
      <AspectRatio ratio={16 / 9}>
        <video
          controls
          className="w-full h-full object-cover"
        >
          <source src={IMAGES.weddingVideo} type="video/mp4" />
        </video>
      </AspectRatio>
    </Card>
  )
} 