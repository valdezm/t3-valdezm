import { mock } from "node:test";


const mockImageNames = [
  'geosite.jpeg',
  'advekit.jpeg',
  'upright.png'
]

const mockImages = mockImageNames.map((image) => {
  return {
    src: `./images/${image}`,
    alt: image
  }
})

export default function HomePage() {
  return (
    <main className="container mx-auto">
      Mark Valdez Portfolio
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image, index) => {
          return (
            <div key={index} className="w-48">
              <img key={index} src={image.src} alt={image.alt} />
            </div>
          )
        })}
      </div>
    </main>
  );
}
