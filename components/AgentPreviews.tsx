import React from 'react';
import Link from 'next/link';
import { HiArrowTopRightOnSquare } from 'react-icons/hi2';
import { importIcon } from '@/utils/iconImporter';
import BetterIcon from '@/components/BetterIcon';
import { getSortedDirectoryData } from '@/utils/markdownUtils';

const AgentPreviews: React.FC = () => {
  // Get the first 4 sorted agents
  const agentsMetadata = getSortedDirectoryData("content/agents", "agent").slice(0,4);

  return (
    <div className="flex gap-4 flex-col md:flex-row xl:justify-between flex-wrap justify-center max-w-7xl w-full">
      {agentsMetadata.map((metadata, index) => {
        const IconComponent = importIcon(metadata.icon);

        return (
          <Link
            className="flex flex-col items-center rounded-xl bg-white px-4 py-8 md:max-w-72 hover:bg-gray-50 transition-all ease-in relative"
            key={index}
            href={`/agents/${metadata.slug}`}
          >
            <BetterIcon className="absolute top-4 right-6">
              <HiArrowTopRightOnSquare />
            </BetterIcon>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-2">
              <BetterIcon>
                <IconComponent className="h-8 w-8 md:h-6 md:w-6" />
              </BetterIcon>
              <h3 className="text-lg font-semibold mb-2 mt-4 md:mb-4">{metadata.title}</h3>
            </div>
            <p className="text-gray-600 text-balance md:text-center">{metadata.description}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default AgentPreviews;
