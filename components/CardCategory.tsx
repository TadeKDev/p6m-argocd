import type { JSX } from "react";
import Link from "next/link";
import { categories } from "@/content/blog";

// This is the category card that appears in the home page and in the category page
const CardCategory = ({
  categorySlug,
  tag = "h2",
}: {
  categorySlug: keyof typeof categories;
  tag?: keyof JSX.IntrinsicElements;
}) => {
  const TitleTag = tag;
  const category = categories[categorySlug];
  return (
    <Link
      className="p-4 bg-base-200 text-base-content rounded-box duration-200 hover:bg-neutral hover:text-neutral-content"
      href={`/blog/category/${categorySlug}`}
      title={category.title}
      rel="tag"
    >
      <TitleTag className="md:text-lg font-medium">
        {category?.titleShort || category.title}
      </TitleTag>
    </Link>
  );
};

export default CardCategory;
