import Image from 'next/image';
import { authors } from '@/content/blog';
import CardArticle from '@/components/CardArticle';
import { getSEOTags } from '@/libs/seo';
import { getSortedDirectoryData } from '@/utils/markdownUtils';
import config from '@/config';

interface AuthorProps {
  params: {
    authorSlug: string;
  }
}

export async function generateMetadata({ params: { authorSlug } }: AuthorProps) {
  const author = authors[authorSlug];

  return getSEOTags({
    title: `${author.name}, Author at ${config.appName}'s Blog`,
    description: `${author.name}, Author at ${config.appName}'s Blog`,
  });
}

export async function generateStaticParams() {
  return Object.keys(authors).map((authorSlug) => ({
    authorSlug,
  }));
}

export default async function Author({ params: { authorSlug } }: AuthorProps) {
  const author = authors[authorSlug];

  const articlesMetadata = getSortedDirectoryData("content/blog/articles", "blog");
  const articlesByAuthor = articlesMetadata
    .filter((article) => article.authorSlug === authorSlug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).valueOf() - new Date(a.publishedAt).valueOf(),
    );

  return (
    <>
      <section className="mx-auto mb-24 mt-12 flex max-w-3xl flex-col gap-8 md:mb-32 md:flex-row">
        <div>
          <p className="mb-2 text-xs uppercase tracking-wide text-base-content/80">
            Authors
          </p>
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight lg:text-5xl">
            {author.name}
          </h1>
          <p className="mb-6 font-medium md:mb-10 md:text-lg">{author.job}</p>
          <p className="text-base-content/80 md:text-lg">
            {author.description}
          </p>
        </div>

        <div className="flex shrink-0 gap-4 max-md:order-first md:flex-col">
          <Image
            src={author.avatar}
            width={256}
            height={256}
            alt={author.name}
            priority={true}
            className="w-[12rem] rounded-box md:w-[16rem]"
            style={{
              maxWidth: '100%',
              height: 'auto',
            }}
          />

          {author.socials?.length > 0 && (
            <div className="flex flex-col gap-4 md:flex-row">
              {author.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="btn btn-square"
                  // Using a dark theme? -> className="btn btn-square btn-neutral"
                  title={`Go to ${author.name} profile on ${social.name}`}
                  target="_blank"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight md:mb-12 lg:text-4xl">
          Most recent articles by {author.name}
        </h2>

        <div className="grid gap-8 lg:grid-cols-2">
          {articlesByAuthor.map((article) => (
            <CardArticle key={article.slug} metadata={article} />
          ))}
        </div>
      </section>
    </>
  );
}
