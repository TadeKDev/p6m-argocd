import Image from 'next/image';
import Script from 'next/script';
import dynamic from "next/dynamic";
import { getSEOTags } from '@/libs/seo';
import config from '@/config';
import CTA from '@/components/CTA';
import { getSortedDirectoryData } from '@/utils/markdownUtils';

interface AgentProps {
  params: {
    agentSlug: string;
  }
}

export async function generateMetadata({ params: { agentSlug } }: AgentProps) {
  const agentsMetadata = getSortedDirectoryData("content/agents", "agent");
  const agent = agentsMetadata.find((agent) => agent.slug === agentSlug);

  return getSEOTags({
    title: `${agent.title} | ${config.appName} AI`,
    description: agent.description,
    extraTags: {
      openGraph: {
        title: `${agent.title} | ${config.appName} AI`,
        description: agent.description,
        url: `/agents/${agent.slug}`,
        images: [
          {
            url: agent.imagePath,
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
  const articlesMetadata = getSortedDirectoryData("content/agents", "agent");
  return articlesMetadata.map((metadata) => ({
    agentSlug: metadata.slug,
  }));
}

export default async function Agent({ params: { agentSlug } }: AgentProps) {
  const agentsMetadata = getSortedDirectoryData("content/agents", "agent");
  const agent = agentsMetadata.find((agent) => agent.slug === agentSlug);

  const Mdx = dynamic(() => import(`@/content/agents/${agent.slug}.mdx`), {
    ssr: false,
  });

  return (
    <>
      {/* SCHEMA JSON-LD MARKUP FOR GOOGLE */}
      <Script
        type="application/ld+json"
        id={`json-ld-agent-${agent.slug}`}
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://${config.domainName}/agents/${agent.slug}`,
            },
            name: agent.title,
            headline: agent.title,
            description: agent.description,
            image: `https://${config.domainName}${agent.imagePath}`,
          }),
        }}
      />

      <div className="flex flex-col h-full">
        <section className="max-w-[800px] mb-12">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:mb-8 md:text-5xl lg:text-6xl">
            {agent.title}
          </h1>

          <p className="max-w-[700px] text-base-content/80 md:text-lg">
            {agent.description} Check out the sample run below:
          </p>
        </section>
        <section className="w-full max-md:pt-4 md:pr-20 relative prose max-w-none">
          <Image
            src={agent.imagePath}
            alt={agent.imageAlt}
            width={0} // Dummy width, real width is set below
            height={0} // Dummy height, real height is set below
            sizes="100vw"
            style={{
              objectFit: "contain",
              position: "relative",
              width: '100%',
              height: 'auto',
            }}
          />
          <Mdx />
        </section>
        <CTA buttonText={"Try this Agent Today"}/>
      </div>
    </>
  );
}
