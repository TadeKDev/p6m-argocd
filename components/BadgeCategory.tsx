import Link from "next/link";
import { categories } from "@/content/blog";

// This is the category badge that appears in the article page and in <CardArticle /> component
const Category = ({
  categorySlug,
  extraStyle,
}: {
  categorySlug: keyof typeof categories;
  extraStyle?: string;
}) => {
  const category = categories[categorySlug];

  return (
    <Link
      href={`/blog/category/${categorySlug}`}
      className={`badge badge-sm md:badge-md hover:badge-primary ${
        extraStyle ? extraStyle : ""
      }`}
      title={`Posts in ${category.title}`}
      rel="tag"
    >
      {category.titleShort}
    </Link>
  );
};

export default Category;
