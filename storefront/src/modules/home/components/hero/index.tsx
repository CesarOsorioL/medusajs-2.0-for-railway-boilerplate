import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import Image from "next/image"


const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-ui-bg-subtle">
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6">
        <Image
            src="/banner.png" // Asegúrate de que la imagen esté en la carpeta /public
            alt="Banner Image"
            fill
            // width={300}
            // height={200}
            className="rounded-lg shadow-md"
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
      </div>
    </div>
  )
}

export default Hero
