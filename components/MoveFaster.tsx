import React from 'react';
import {
  HiMiniArrowRightEndOnRectangle,
  HiOutlineCalculator,
  HiOutlinePresentationChartBar,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import BetterIcon from '@/components/BetterIcon';
import AgentPreviews from "@/components/AgentPreviews";

interface AgentCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const agentCards: AgentCard[] = [
  {
    icon: <HiMiniArrowRightEndOnRectangle className="h-8 w-8" />,
    title: 'Connect to any data sources',
    description:
      'Connect directly to business systems like Hubspot, Salesforce, JIRA and Shopify.',
  },
  {
    icon: <HiOutlineCalculator className="h-8 w-8" />,
    title: 'Perform advanced data analysis',
    description:
      'Analyze data and extract real-time insights across all your data sources to power better decisions.',
  },
  {
    icon: <HiOutlineRocketLaunch className="h-8 w-8" />,
    title: 'Understand your customers',
    description:
      'Gain customer insights across data sources without having to engineer a complete data warehouse.',
  },
  {
    icon: <HiOutlinePresentationChartBar className="h-8 w-8" />,
    title: 'Generate reports & insights',
    description:
      'Get information delivered when you need it, in any format or channel. Email, Slack, PDF, and more.    ',
  },
];

const MoveFaster: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-gray-100 px-8 py-16 text-center md:py-24">
      <h2 className="font-heading text-4xl font-semibold md:text-4xl">
        Move Faster with Knowledge at Your Fingertips
      </h2>
      <p className="mb-8 max-w-4xl text-balance font-sans text-xl font-normal text-gray-700">
        Access data and knowledge from any source, including documents and structured data
        from your SaaS applications. Create knowledge bases for any team. Help 
        people get answers in seconds, or have insights delivered on a schedule.
      </p>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        {agentCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center rounded-xl bg-white px-6 py-8"
          >
            <BetterIcon>{card.icon}</BetterIcon>
            <h3 className="mb-2 mt-4 text-xl font-semibold">{card.title}</h3>
            <p className="max-w-xl text-balance text-gray-600">
              {card.description}
            </p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-semibold mb-2 mt-4">
        Try Out An Agent
      </h2>
      <AgentPreviews />
    </section>
  );
};

export default MoveFaster;
