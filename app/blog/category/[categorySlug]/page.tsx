import { categories } from '@/content/blog';
import CardArticle from '@/components/CardArticle';
import CardCategory from '@/components/CardCategory';
import { getSEOTags } from '@/libs/seo';
import { getSortedDirectoryData } from '@/utils/markdownUtils';
import config from '@/config';

interface CategoryProps {
  params: {
    categorySlug: string;
  }
}

export async function generateMetadata({ params: { categorySlug } }: CategoryProps) {
  const category = categories[categorySlug];

  return getSEOTags({
    title: `${category.title} | Blog by ${config.appName}`,
    description: category.description,
  });
}

export async function generateStaticParams() {
  return Object.keys(categories).map((categorySlug) => ({
    categorySlug,
  }));
}

export default async function Category({ params: { categorySlug } }: CategoryProps) {
  const category = categories[categorySlug];

  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog");
  const articlesInCategory = articlesMetadata
    .filter((article) =>
      article.categorySlugs.includes(categorySlug),
    )
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    )
    .slice(0, 3);

  return (
    <>
      <section className="mx-auto mb-24 mt-12 max-w-3xl text-center md:mb-32">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight md:mb-12 lg:text-5xl">
          {category.title}
        </h1>
        <p className="mx-auto max-w-xl opacity-80 md:text-lg">
          {category.description}
        </p>
      </section>

      <section className="mb-24">
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:mb-12 lg:text-4xl">
          Most recent articles in {category.title}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {articlesInCategory.map((article) => (
            <CardArticle
              key={article.slug}
              metadata={article}
              tag="h3"
              showCategory={false}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:mb-12 lg:text-4xl">
          Other categories you might like
        </h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(categories)
            .filter((slug) => slug !== categorySlug)
            .map((category) => (
              <CardCategory key={category} categorySlug={category} tag="h3" />
            ))}
        </div>
      </section>
    </>
  );
}
