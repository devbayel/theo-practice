import Link from "next/link";
import { db } from "~/server/db";
import { log } from "console";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  async function Images(){

    const images = await db.query.images.findMany({
      orderBy:(model,  { desc }) => desc(model.id),
    });

    return (
      <div className="flex flex-wrap gap-4">
      {[...images, ...images, ...images].map((image, index) => (
        <div key={image.id + "-" + index} className="w-48 flex flex-col">
          <img src={image.url}/>
          <div>{image.name}</div>
        </div>
      ))
    }</div>
    )
  }

  return (
    <main className="">

      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in above</div>
      </SignedOut>

      <SignedIn>
        <Images/>
      </SignedIn>
    </main>
  );
}
