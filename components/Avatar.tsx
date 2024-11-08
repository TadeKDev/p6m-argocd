import Link from "next/link";
import Image from "next/image";
import { authors } from "@/content/blog";

// This is the author avatar that appears in the article page and in <CardArticle /> component
const Avatar = ({ authorSlug }: { authorSlug: keyof typeof authors }) => {
  const author = authors[authorSlug];
  return (
    <Link
      href={`/blog/author/${authorSlug}`}
      title={`Posts by ${author.name}`}
      className="inline-flex items-center gap-2 group"
      rel="author"
    >
      <span itemProp="author">
        <Image
          src={author.avatar}
          // alt={`Avatar of ${article.author.name}`}
          alt=""
          className="w-7 h-7 rounded-full object-cover object-center"
          width={28}
          height={28}
          style={{
            maxWidth: "100%",
            height: "auto"
          }} />
      </span>
      <span className="group-hover:underline">{author.name}</span>
    </Link>
  );
};

export default Avatar;
