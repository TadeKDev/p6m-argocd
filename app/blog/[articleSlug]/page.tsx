import Link from 'next/link';
import Script from 'next/script';
import Image from "next/image";
import dynamic from "next/dynamic";
import { authors } from '@/content/blog';
import BadgeCategory from '@/components/BadgeCategory';
import Avatar from '@/components/Avatar';
import { getSEOTags } from '@/libs/seo';
import { getSortedDirectoryData } from '@/utils/markdownUtils';
import config from '@/config';

interface ArticleProps {
  params: {
    articleSlug: string;
  }
}

export async function generateMetadata({ params: { articleSlug } }: ArticleProps) {
  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog");
  const article = articlesMetadata.find((article) => article.slug === articleSlug);

  return getSEOTags({
    title: `${article.title} | ${config.appName} AI`,
    description: article.description,
    extraTags: {
      openGraph: {
        title: `${article.title} | ${config.appName} AI`,
        description: article.description,
        url: `/blog/${article.slug}`,
        images: [
          {
            url: article.imagePath,
            width: 1200,
            height: 660,
          },
        ],
        locale: 'en_US',
        type: 'website',
      },
    },
  });
}

export async function generateStaticParams() {
  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog");
  return articlesMetadata.map((metadata) => ({
    articleSlug: metadata.slug,
  }));
}

export default async function Article({ params: { articleSlug } }: ArticleProps) {
  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog");
  const article = articlesMetadata.find((article) => article.slug === articleSlug);
  const author = authors[article.authorSlug];

  const Mdx = dynamic(() => import(`@/content/blog/articles/${article.slug}.mdx`), {
    ssr: false,
  });

  const articlesRelated = articlesMetadata
    .filter(
      (a) =>
        a.slug !== article.slug &&
        a.categorySlugs.some((c) =>
          article.categorySlugs.includes(c),
        ),
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
    )
    .slice(0, 3);

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <Script
        type="application/ld+json"
        id={`json-ld-article-${article.slug}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://${config.domainName}/blog/${article.slug}`,
            },
            name: article.title,
            headline: article.title,
            description: article.description,
            image: `https://${config.domainName}${article.imagePath}`,
            datePublished: article.publishedAt,
            dateModified: article.publishedAt,
            author: {
              '@type': 'Person',
              name: author.name,
            },
          }),
        }}
      />

      {/* GO BACK LINK */}
      <div>
        <Link
          href="/blog"
          className="link inline-flex items-center gap-1 text-base-content/80 !no-underline hover:text-base-content"
          title="Back to Blog"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M15 10a.75.75 0 01-.75.75H7.612l2.158 1.96a.75.75 0 11-1.04 1.08l-3.5-3.25a.75.75 0 010-1.08l3.5-3.25a.75.75 0 111.04 1.08L7.612 9.25h6.638A.75.75 0 0115 10z"
              clipRule="evenodd"
            />
          </svg>
          Back to Blog
        </Link>
      </div>

      <article>
        {/* HEADER WITH CATEGORIES AND DATE AND TITLE */}
        <section className="my-12 max-w-[800px] md:my-20">
          <div className="mb-6 flex items-center gap-4">
            {article.categorySlugs.map((categorySlug) => (
              <BadgeCategory
                categorySlug={categorySlug}
                key={categorySlug}
                extraStyle="!badge-lg"
              />
            ))}
            <span className="text-base-content/80" itemProp="datePublished">
              {new Date(article.publishedAt).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </div>

          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:mb-8 md:text-5xl lg:text-6xl">
            {article.title}
          </h1>

          <p className="max-w-[700px] text-base-content/80 md:text-lg">
            {article.description}
          </p>
        </section>

        <div className="flex flex-col md:flex-row ">
          {/* SIDEBAR WITH AUTHORS AND 3 RELATED ARTICLES */}
          <section className="shrink-0 border-base-content/10 max-md:border-b max-md:pb-4 md:order-last md:w-72 md:border-l md:pl-12">
            <p className="mb-2 text-sm text-base-content/80 md:mb-3">
              Posted by
            </p>
            <Avatar authorSlug={article.authorSlug} />

            {articlesRelated.length > 0 && (
              <div className="mt-12 hidden md:block">
                <p className="mb-2 text-sm text-base-content/80 md:mb-3">
                  Related reading
                </p>
                <div className="space-y-2 md:space-y-5">
                  {articlesRelated.map((article) => (
                    <div className="" key={article.slug}>
                      <p className="mb-0.5">
                        <Link
                          href={`/blog/${article.slug}`}
                          className="link-hover link font-medium hover:link-primary"
                          title={article.title}
                          rel="bookmark"
                        >
                          {article.title}
                        </Link>
                      </p>
                      <p className="max-w-full text-sm text-base-content/80">
                        {article.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* ARTICLE CONTENT */}
          <section className="w-full max-md:pt-4 md:pr-20 prose max-w-none">
            <Image
              src={article.imagePath}
              alt="Supabase and Supercog logo combined"
              width={700}
              height={500}
              priority={true}
              className="rounded-box mb-12 md:mb-20"
            />
            <Mdx />
          </section>
        </div>
      </article>
    </>
  );
}
