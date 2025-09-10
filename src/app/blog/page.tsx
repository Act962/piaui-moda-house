import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import Image from "next/image";
import Link from "next/link";

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

export default async function BlogPage() {
  const data: BasicBlogPost[] = await getData();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full pt-36 pb-32 bg-gradient-to-tr from-[#E97F40] via-[#E66A31] to-[#E14918] text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">Blog</h1>
      </section>

      <div className="mt-20 sm:mt-28 pb-28 w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
              <h4 className=" font-bold mt-2 line-clamp-3 opacity-85 group-hover:opacity-100">
                {post.title}
              </h4>
              <span className="text-sm mt-1">
                {new Intl.DateTimeFormat("pt-BR", {
                  dateStyle: "medium",
                }).format(new Date(post.publishedAt))}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
