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
    title: 'Connect to real data sources',
    description:
      'Go beyond basic data sources and connect directly to business systems from Hubspot to Postgres to Jira.',
  },
  {
    icon: <HiOutlineCalculator className="h-8 w-8" />,
    title: 'Perform advanced data analysis',
    description:
      'Analyze and process data both inside and outside the LLM to make better decisions using up-to-date information.',
  },
  {
    icon: <HiOutlineRocketLaunch className="h-8 w-8" />,
    title: 'Automate repetitive tasks',
    description:
      'Turn your processses into automated agents that run on your behalf whether scheduled or on demand.',
  },
  {
    icon: <HiOutlinePresentationChartBar className="h-8 w-8" />,
    title: 'Generate reports & insights',
    description:
      'Schedule and automate your agent to provide data in the place and format you prefer. Email, Slack, PDF, and more.    ',
  },
];

const BeyondChatbots: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-gray-100 px-8 py-16 text-center md:py-24">
      <h2 className="font-heading text-4xl font-semibold md:text-4xl">
        Beyond Chatbots: AI That Takes Action
      </h2>
      <p className="mb-8 max-w-4xl text-balance font-sans text-xl font-normal text-gray-700">
        Supercog agents go beyond simple conversations. With an ever growing
        library of tools and capabilitities, they can perform complex tasks
        across your organization's systems.
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

export default BeyondChatbots;
