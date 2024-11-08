import React from 'react';
import {
  HiOutlinePuzzlePiece,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
  HiOutlineWrench,
} from 'react-icons/hi2';
import BetterIcon from './BetterIcon';

interface CardContent {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const cards: CardContent[] = [
  {
    icon: <HiOutlineWrench className="h-8 w-8" />,
    title: 'Extensible & customizable',
    description:
      "Easily integrate new tools and connectors to work with all of your company's systems.",
  },
  {
    icon: <HiOutlineShieldCheck className="h-8 w-8" />,
    title: 'Privacy & security first',
    description:
      'Support for on-premises LLMs and processing ensures your data stays secure and compliant.',
  },
  {
    icon: <HiOutlineUserGroup className="h-8 w-8" />,
    title: 'Democratize AI across your organization',
    description:
      'Empower early adopters to build & adapt AI agents that anyone in the company can use - from Q&A chatbots to interactive admin tools.',
  },
  {
    icon: <HiOutlinePuzzlePiece className="h-8 w-8" />,
    title: 'Flexible model support',
    description:
      'Use popular closed and open-source models, or bring your own for maximum customization and control.',
  },
];

const EnterpriseGrade: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-5 bg-gray-100 px-8 py-16 text-center md:py-24">
      <h2 className="font-heading text-4xl font-semibold md:text-4xl">
        Your Enterprise-Grade AI Platform
      </h2>
      <p className="mb-8 max-w-4xl text-balance font-sans text-xl font-normal text-gray-700">
        While accessible to the individual or small team, Supercog provides a
        robust and secure platform for deploying AI agents across your
        organization, with advanced features designed for enterprise-scale
        operations.
      </p>

      <div className="grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
        {cards.map((card, index) => (
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
    </section>
  );
};

export default EnterpriseGrade;
