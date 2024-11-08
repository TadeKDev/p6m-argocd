import type {JSX} from 'react';
import {StaticImageData} from 'next/image';
import scottImg from '@/public/blog/authors/scott.jpeg';
import alexImg from '@/public/blog/authors/alex.jpeg';


// ==================================================================================================================================================================
// BLOG CATEGORIES 🏷️
// ==================================================================================================================================================================

export type CategoryType = {
  title: string;
  titleShort?: string;
  description: string;
  descriptionShort?: string;
};

// All the blog categories data display in the /blog/category/[categoryI].js pages.
export const categories: {
  [key: string]: CategoryType;
} = {
  feature: {
    // The title to display the category title (h1), the category badge, the category filter, and more. Less than 60 characters.
    title: 'New Features',
    // A short version of the title above, display in small components like badges. 1 or 2 words
    titleShort: 'Features',
    // The description of the category to display in the category page. Up to 160 characters.
    description: "Here are the latest features we've added to Supercog.",
    // A short version of the description above, only displayed in the <Header /> on mobile. Up to 60 characters.
    descriptionShort: 'Latest features added to Supercog.',
  },
  tutorial: {
    title: 'How Tos & Tutorials',
    titleShort: 'Tutorials',
    description: 'Learn how to use Supercog with these step-by-step tutorials.',
    descriptionShort:
      'Learn how to use Supercog with these step-by-step tutorials.',
  },
  news: {
    title: 'News',
    titleShort: 'News',
    description: 'Learn about the latest news in the Supercog and AI space.',
    descriptionShort:
      'Learn about the latest news in the Supercog and AI space.',
  },
};

// ==================================================================================================================================================================
// BLOG AUTHORS 📝
// ==================================================================================================================================================================

export type AuthorType = {
  name: string;
  job: string;
  description: string;
  avatar: StaticImageData | string;
  socials?: {
    name: string;
    icon: JSX.Element;
    url: string;
  }[];
};

// Social icons used in the author's bio.
const socialIcons: {
  [key: string]: {
    name: string;
    svg: JSX.Element;
  };
} = {
  threads: {
    name: 'Threads',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        className="h- w-6"
      >
        <path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" />
      </svg>
    ),
  },
  linkedin: {
    name: 'LinkedIn',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
      </svg>
    ),
  },
  github: {
    name: 'GitHub',
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        // Using a dark theme? ->  className="w-6 h-6 fill-white"
        viewBox="0 0 24 24"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
};

// All the blog authors data display in the /blog/author/[authorSlug].js pages.
export const authors: {
  [key: string]: AuthorType;
} = {
  scott: {
    // The name to display in the author's bio. Up to 60 characters.
    name: 'Scott Persinger',
    // The job to display in the author's bio. Up to 60 characters.
    job: 'CEO of Supercog',
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "I am currently leading Supecog AI, a new startup devoted to solving application integration - once and for all! - using smart LLM agents. Hit me up if you'd like to learn more about some of the problems that we can solve. In the past I ran engineering teams at Tatari, Stripe, and Heroku",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: scottImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.threads.name,
        icon: socialIcons.threads.svg,
        url: 'https://threads.net/sfscottp',
      },
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: 'https://www.linkedin.com/in/scottpersinger/',
      },
      {
        name: socialIcons.github.name,
        icon: socialIcons.github.svg,
        url: 'https://github.com/scottpersinger/',
      },
    ],
  },
  alex: {
    // The name to display in the author's bio. Up to 60 characters.
    name: 'Alex Osborne',
    // The job to display in the author's bio. Up to 60 characters.
    job: 'Supercog Co-founder',
    // The description of the author to display in the author's bio. Up to 160 characters.
    description:
      "I am a co-founder at Supecog AI",
    // The avatar of the author to display in the author's bio and avatar badge. It's better to use a local image, but you can also use an external image (https://...)
    avatar: alexImg,
    // A list of social links to display in the author's bio.
    socials: [
      {
        name: socialIcons.linkedin.name,
        icon: socialIcons.linkedin.svg,
        url: 'https://www.linkedin.com/in/alosborne/',
      },
    ],
  },
};
