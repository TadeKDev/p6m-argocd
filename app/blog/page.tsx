import { categories } from '@/content/blog';
import CardArticle from '@/components/CardArticle';
import CardCategory from '@/components/CardCategory';
import { getSortedDirectoryData } from '@/utils/markdownUtils';
import config from '@/config';
import {getSEOTags} from '@/libs/seo';

const SUBTITLE =
  'Learn how to use AI to automate your business and streamline your data integrations with natural language.';

export const metadata = getSEOTags({
  title: `${config.appName} Blog | AI For Data Integration & Automation`,
  description: SUBTITLE,
});

export default async function Blog() {
  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog").slice(0, 6);

  return (
    <>
      <section className="mx-auto mb-24 mt-12 max-w-xl text-center md:mb-32">
        <h1 className="mb-6 text-3xl font-extrabold tracking-tight lg:text-5xl">
          The <span dangerouslySetInnerHTML={{__html: config.appNameStyled}} />{' '}
          AI Blog
        </h1>
        <p className="text-lg leading-relaxed opacity-80">{SUBTITLE}</p>
      </section>

      <section className="mb-24 grid gap-8 md:mb-32 lg:grid-cols-2">
        {articlesMetadata.map((articleMetadata, i) => (
          <CardArticle
            metadata={articleMetadata}
            key={articleMetadata.slug}
            isImagePriority={i <= 2}
          />
        ))}
      </section>

      <section>
        <p className="mb-8 text-center text-2xl font-bold tracking-tight md:mb-12 lg:text-4xl">
          Browse articles by category
        </p>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Object.keys(categories).map((categorySlug) => (
            <CardCategory key={categorySlug} categorySlug={categorySlug} tag="div" />
          ))}
        </div>
      </section>
    </>
  );
}
