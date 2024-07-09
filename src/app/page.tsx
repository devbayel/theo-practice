import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/31d02096-7460-4db6-9cd4-5eec9d3552d3-vg46we.jpg",
  "https://utfs.io/f/2240afdd-1281-4715-80d2-79352a1e4ada-xkwarz.jpg",
  "https://utfs.io/f/85f78515-2865-4d2d-aa73-550cc30ffe99-pol9fn.jpg",
  "https://utfs.io/f/01e66c5f-5ea1-466a-a66d-74b0428f141f-8ffevy.jpg"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}))


export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url}/>
          </div>
        ))
      }</div>
    </main>
  );
}
