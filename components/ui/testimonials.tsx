"use client"


import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"


interface Testimonial {
  image: string
  name: string
  username: string
  text: string
  social: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  
}

export function Testimonials({
  testimonials,
  className,
  title = "Tired of the GTM Grind? You're Not Alone",
  description = "From chasing elusive contacts to wrestling with outdated data, these common frustrations can derail even the most ambitious growth plans.",

}: TestimonialsProps) {
  
  

  // Only show the first 6 testimonials, split for layout
  const topTestimonials = testimonials.slice(0, 3)
  const bottomTestimonials = testimonials.slice(3, 6)

  // Subtle staggered effect: cards have different heights and slight rotation, but no animation
  const cardClasses = [
    // Top row
    'mt-2 rotate-[-2deg] h-52', // 1st card: slightly up, rotated
    'mb-4 rotate-1 h-64',       // 2nd card: slightly down, longer, rotated
    'mt-6 rotate-2 h-56',       // 3rd card: more up, rotated
    // Bottom row
    'mb-6 rotate-1 h-56',       // 4th card: more down, rotated
    'mt-4 rotate-[-1deg] h-64', // 5th card: up, longer, rotated
    'mb-2 rotate-2 h-52',       // 6th card: down, rotated
  ]

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-4xl font-medium">{title}</h2>
          <p className="text-center text-muted-foreground">
            {description.split("<br />").map((line, i) => (
              <span key={i}>
                {line}
                {i !== description.split("<br />").length - 1 && <br />}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Top row: 3 testimonials */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-5 mb-8">
          {topTestimonials.map((testimonial, index) => (
            <Card
              key={index}
              className={cn(
                "w-full md:w-80 p-5 relative bg-card border-border shadow-lg transition-all duration-500",
                cardClasses[index]
              )}
            >
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-4">
                  <span className="font-semibold text-base">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.username}
                  </span>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <p className="text-foreground font-medium">
                  {testimonial.text}
                </p>
              </div>
              
            </Card>
          ))}
        </div>

        {/* Bottom row: next 3 testimonials */}
        <div className="flex flex-col md:flex-row justify-center items-end gap-5">
          {bottomTestimonials.map((testimonial, index) => (
            <Card
              key={index + 3}
              className={cn(
                "w-full md:w-80 p-5 relative bg-card border-border shadow-lg transition-all duration-500",
                cardClasses[index + 3]
              )}
            >
              <div className="flex items-center">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div className="flex flex-col pl-4">
                  <span className="font-semibold text-base">
                    {testimonial.name}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {testimonial.username}
                  </span>
                </div>
              </div>
              <div className="mt-5 mb-5">
                <p className="text-foreground font-medium">
                  {testimonial.text}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
