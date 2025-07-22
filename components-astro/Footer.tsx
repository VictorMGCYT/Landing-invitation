import { Card, CardContent } from '@/components/ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import React from 'react'

const images = [
    '/Landing-invitation/image1.jpg',
    '/Landing-invitation/image2.jpg',
    '/Landing-invitation/image3.jpg',
    '/Landing-invitation/image4.jpg',
]

export default function Footer() {
  return (
    <Carousel className="w-[60%] md:w-full max-w-xs">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center">
                    <img src={image} alt={`Image ${index + 1}`} className="object-cover w-full h-full rounded-lg" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}