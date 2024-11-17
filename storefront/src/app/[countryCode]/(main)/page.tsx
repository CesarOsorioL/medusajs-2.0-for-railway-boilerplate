import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { getCollectionsWithProducts } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 14 and Medusa.",
}

export default async function Home({
  params: { countryCode },
}: {
  params: { countryCode: string }
}) {
  const collections = await getCollectionsWithProducts(countryCode)
  const region = await getRegion(countryCode)

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <div className="flex">
        <div className="w-3/10 border-r border-gray-300 p-4">
          Contenido izquierda
        </div>
        <div className="w-full flex flex-col">
          <div className="h-[30%] border-b border-gray-300 p-4">
            Contenido fila superior
          </div>
          <div className="flex-1 w-full p-4">
            {/* <Hero /> */}
            <div className="py-1">
              <ul className="flex flex-col gap-x-6">
                <FeaturedProducts collections={collections} region={region} />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}