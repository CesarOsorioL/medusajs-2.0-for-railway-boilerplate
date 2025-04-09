import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"
import { useEffect, useState } from "react"


const Hero = () => {
  const [imageSrc, setImageSrc] = useState("mobile-banner.png")

  useEffect(() => {
    const updateImage = () => {
      const width = window.innerWidth
      if (width < 768) {
        setImageSrc("/mobile-banner.png")
      } else if (width < 1200) {
        setImageSrc("/images/banner/banner-tablet.jpg")
      } else {
        setImageSrc("/banner.png")
      }
    }

    updateImage()
    window.addEventListener("resize", updateImage)
    return () => window.removeEventListener("resize", updateImage)
  }, [])


  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      {/* <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6"> */}
        <Image
            src={imageSrc} // Asegúrate de que la imagen esté en la carpeta /public
            alt="Banner Image"
            fill
            // width={300}
            // height={200}
        //     sizes="(max-width: 768px) 100vw,
        //  (max-width: 1200px) 100vw,
        //  100vw"
           className="object-cover object-center"
           priority
          />
          {/* 
           <span>
          <Heading
            level="h1"
            className="text-3xl leading-10 text-ui-fg-base font-normal"
          >
            Well done! You have successfully deployed your Medusa 2.0 store on Railway!
          </Heading>
          <Heading
            level="h2"
            className="text-3xl leading-10 text-ui-fg-subtle font-normal"
          >
            Need help customizing your store?
          </Heading> 
        </span>
        */}
        {/* <a
          href="https://funkyton.com/medusajs-2-0-is-finally-here/"
          target="_blank"
        >
          <h1 style={{ textDecoration: "underline" }}>
            Visit the tutorial
          </h1>
        </a> */}
      {/* </div> */}
    </div>
  )
}

export default Hero
