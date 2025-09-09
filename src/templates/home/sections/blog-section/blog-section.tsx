import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import Image from "next/image";
import React from "react";

async function getData() {
  const query = `
    *[_type == 'post'] | order(publishedAt desc) {
  title,
  "currentSlug": slug.current,
  mainImage,
  publishedAt,
  smallDescription
}
  `;

  const data = await client.fetch(query);

  return data;
}

export async function BlogSection() {
  const data: BasicBlogPost[] = await getData();

  console.log(data);
  return (
    <section className="py-24 text-center">
      <div className="w-full max-w-6xl mx-auto space-y-12 px-8">
        <h2 className="font-medium tracking-widest text-xl uppercase">
          Outras edições
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((post, index) => (
            <div key={`${post.currentSlug}-${index}`} className="group">
              <div className="relative h-60 md:h-80 w-full overflow-hidden rounded-xl">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt}
                  fill
                  className="bg-cover bg-center rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p>{post.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
