"use client" 
import { useEffect, useState } from "react"
import Image from "next/image"

const Hero = () => {
  const [imageSrc, setImageSrc] = useState("mobile-banner.png")

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth
      if (width < 768) {
        setImageSrc("/mobile-banner.png")
      } else if (width < 1200) {
        setImageSrc("/banner.png")
      } else {
        setImageSrc("/big-banner.png")
      }
    }

    updateImage()
    window.addEventListener("resize", updateImage)

    return () => {
      window.removeEventListener("resize", updateImage)
    }
  }, [])

  return (
    <div className="h-[20vh] md:h-[30vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle sm:h-[75vh]">
      <Image
        src={imageSrc} // Ensure the image is placed in the /public folder
        alt="Banner Image"
        fill
        className="object-cover object-center"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw" // Use sizes attribute for responsive image loading
      />
    </div>
  )
}

export default Hero

