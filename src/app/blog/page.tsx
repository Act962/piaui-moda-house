import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Piauí Moda House",
  description:
    "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
  icons: {
    icon: "/pmh-black.png",
    shortcut: "/pmh-black.png",
  },
  keywords: ["Moda", "Piauí", "House", "Piauí Moda House", "Blog", "Notícias"],
  openGraph: {
    title: "Blog | Piauí Moda House",
    description:
      "O Piauí Moda House celebra em 2025 uma década de resistência criativa e protagonismo cultural.",
    url: "https://www.piauimodahouse.com/pmh-black.png",
    siteName: "Piauí Moda House",
    images: [
      {
        url: "https://www.piauimodahouse.com/pmh-black.png",
        width: 800,
        height: 600,
        alt: "Piauí Moda House",
      },
    ],
  },
};

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

export default async function BlogPage() {
  const data: BasicBlogPost[] = await getData();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <section className="w-full pt-36 pb-32 bg-gradient-to-tr from-[#E97F40] via-[#E66A31] to-[#E14918] text-white text-center">
        <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">Blog</h1>
      </section>

      <div className="mt-20 sm:mt-28 pb-28 w-full max-w-6xl mx-auto px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.map((post, index) => (
            <Link
              href={`/blog/${post.currentSlug}`}
              key={`${post.currentSlug}-${index}`}
              className="group flex flex-col items-start"
            >
              <div className="relative h-60 md:h-60 size-full overflow-hidden rounded-xl">
                <Image
                  src={urlFor(post.mainImage).url()}
                  alt={post.mainImage.alt}
                  width={800}
                  height={800}
                  className="bg-cover size-full bg-center bg-no-repeat rounded-xl group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h4 className=" font-bold mt-2 line-clamp-3 opacity-85 group-hover:opacity-100 text-start">
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
