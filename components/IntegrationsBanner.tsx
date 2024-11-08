import Image from 'next/image';
import config from '@/config';

const IntegrationsBanner = () => {
  const integrations = [
    {name: 'Salesforce', src: '/homepage/salesforce.svg'},
    {name: 'Hubspot', src: '/homepage/hubspot.svg'},
    {name: 'Jira', src: '/homepage/jira.png'},
    {name: 'Snowflake', src: '/homepage/snowflake.svg'},
    {name: 'Github', src: '/homepage/github.png'},
  ];

  return (
    <section className="mx-auto mb-24 px-4">
      <h2 className="mb-8 text-center font-sans font-normal">
        {config.appName} integrates with these systems and many more
      </h2>
      {/* todo: add a link to the integrations page / directory */}
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
        {integrations.map((integration, index) => (
          <div key={index} className="relative h-12 w-20 flex-shrink-0 sm:w-32">
            <Image
              src={integration.src}
              alt={integration.name}
              fill
              sizes="(max-width: 640px) 6rem, 8rem"
              style={{
                objectFit: 'contain',
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default IntegrationsBanner;
