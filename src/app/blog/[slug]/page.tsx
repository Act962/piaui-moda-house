import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { BasicBlogPost } from "@/sanity/lib/interface";
import { PortableText } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

async function getData(slug: string) {
  const query = `
        *[_type == 'post' && slug.current == '${slug}'] {
  'currentSlug': slug.current,
    title,
    body,
    mainImage
}[0]
    `;

  const data = await client.fetch(query);
  return data;
}

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data: BasicBlogPost = await getData(slug);

  if (!data) {
    return {};
  }

  return {
    title: data.title,
    description: data.smallDescription,
    robots: "index, follow",
    openGraph: {
      images: [
        {
          url: urlFor(data.mainImage).url(),
          alt: data.title,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const data: BasicBlogPost = await getData(slug);
  const ImageComponent = ({ value, isInline }: any) => {
    const { width, height } = getImageDimensions(value);
    return (
      <Image
        src={urlFor(value).url()}
        alt={value.alt || ""}
        loading="lazy"
        width={width}
        height={height}
      />
    );
  };

  const components = {
    types: {
      image: ImageComponent,
    },
  };

  return (
    <div className="mt-28 space-y-8 w-full max-w-6xl mx-auto px-8">
      <div>
        <Link href="/" prefetch className="flex items-center gap-2">
          {" "}
          <Image
            src={"/icons/arrow-left.svg"}
            alt="Icon Arrow Left"
            width={24}
            height={24}
          />{" "}
          Voltar
        </Link>
      </div>
      <h1 className="mt-2 block text-3xl leading-8 text-center font-bold tracking-tight sm:text-4xl">
        {data.title}
      </h1>

      <Image
        src={urlFor(data.mainImage).url()}
        alt=""
        width={800}
        height={800}
        priority
        className="rounded-lg mx-auto w-full"
      />

      <div className="prose prose-[#858585] prose-h1:text-[#858585] pb-12">
        <PortableText value={data.body} components={components} />
      </div>
    </div>
  );
}
