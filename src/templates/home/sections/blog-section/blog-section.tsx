import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData() {
  const query = `
    *[_type == 'post'] | order(publishedAt desc)[0...6] {
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

  return (
    <section className="py-24 text-center">
      <div className="w-full max-w-6xl mx-auto space-y-12 px-8">
        <Link href="/blog" className="block" prefetch>
          <h2 className="font-medium tracking-widest text-xl uppercase">
            Blog
          </h2>
        </Link>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((post, index) => (
            <Link
              href={`/blog/${post.currentSlug}`}
              key={`${post.currentSlug}-${index}`}
              className="group flex flex-col items-start"
            >
              <div className="relative h-60 md:h-60 w-full overflow-hidden rounded-xl">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt}
                  fill
                  className="bg-cover bg-center bg-no-repeat rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className="font-bold mt-2 line-clamp-3 opacity-85 group-hover:opacity-100 text-start">
                {post.title}
              </h4>
              <span className="text-sm mt-1">
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "short",
                }).format(new Date(post.publishedAt))}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
