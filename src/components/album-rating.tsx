"use client"

import { useState } from "react"
import { Star } from "lucide-react"

interface AlbumRatingProps {
  albumId: number
  initialRating: number | null
}

export function AlbumRating({ albumId, initialRating }: AlbumRatingProps) {
  const [rating, setRating] = useState(initialRating)
  const [hoveredRating, setHoveredRating] = useState<number | null>(null)

  async function handleRate(newRating: number){
    setRating(newRating)
    await fetch("/api/rating", {
        method: "PATCH",
        body: JSON.stringify({
            nota: newRating,
            albumId: albumId
        })
    })
    
  }

  return (
    <div className="flex items-center">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((star) => (
        <button
          key={star}
          className="p-0.5 focus:outline-none"
          onClick={() => handleRate(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(null)}
        >
          <Star
            className={`h-4 w-4 ${
              star <= (hoveredRating || rating || 0) ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  )
}

