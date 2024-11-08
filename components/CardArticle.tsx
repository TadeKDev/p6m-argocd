import type { JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import BadgeCategory from "./BadgeCategory";
import Avatar from "./Avatar";
import { BlogMetadata } from "@/types";

// This is the article card that appears in the home page, in the category page, and in the author's page
const CardArticle = ({
  metadata,
  tag = "h2",
  showCategory = true,
  isImagePriority = false,
}: {
  metadata: BlogMetadata;
  tag?: keyof JSX.IntrinsicElements;
  showCategory?: boolean;
  isImagePriority?: boolean;
}) => {
  const TitleTag = tag;

  return (
    <article className="card bg-base-200 rounded-box overflow-hidden">
      {metadata.imagePath && (
        <Link
          href={`/blog/${metadata.slug}`}
          className="link link-hover hover:link-primary"
          title={metadata.title}
          rel="bookmark"
        >
          <figure>
            <Image
              src={metadata.imagePath}
              alt={metadata.imageAlt}
              width={600}
              height={338}
              priority={isImagePriority}
              className="aspect-video object-center object-cover hover:scale-[1.03] duration-200 ease-in-out"
              style={{
                maxWidth: "100%",
                height: "auto"
              }} />
          </figure>
        </Link>
      )}
      <div className="card-body">
        {/* CATEGORIES */}
        {showCategory && (
          <div className="flex flex-wrap gap-2">
            {metadata.categorySlugs?.map((categorySlug) => (
              <BadgeCategory categorySlug={categorySlug} key={categorySlug} />
            ))}
          </div>
        )}

        {/* TITLE WITH RIGHT TAG */}
        <TitleTag className="mb-1 text-xl md:text-2xl font-bold">
          <Link
            href={`/blog/${metadata.slug}`}
            className="link link-hover hover:link-primary"
            title={metadata.title}
            rel="bookmark"
          >
            {metadata.title}
          </Link>
        </TitleTag>

        <div className=" text-base-content/80 space-y-4">
          {/* DESCRIPTION */}
          <p className="">{metadata.description}</p>

          {/* AUTHOR & DATE */}
          <div className="flex items-center gap-4 text-sm">
            <Avatar authorSlug={metadata.authorSlug} />

            <span itemProp="datePublished">
              {new Date(metadata.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default CardArticle;
