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
      Mark Valdez Portfolio Page Layer 2
    </main>
  );
}
