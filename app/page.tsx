import {
  HiArrowRight,
  HiOutlineCube,
  HiOutlineRectangleStack,
} from 'react-icons/hi2';
import {BiBookHeart} from 'react-icons/bi';
import {Metadata} from 'next';
import {getSEOTags} from '@/libs/seo';
import Footer from '@/components/Footer';
import config from '@/config';
import Header from '@/components/Header';
import FeatureCard from '@/components/FeatureCard';
import IntegrationsBanner from '@/components/IntegrationsBanner';
import BeyondChatbots from '@/components/BeyondChatbots';
import MoveFaster from '@/components/MoveFaster';
import EnterpriseGrade from '@/components/EnterpriseGrade';
import Link from 'next/link';
import CTA from '@/components/CTA';

export const metadata: Metadata = getSEOTags({
  title: `${config.appName} | ${config.tagline}`,
});

export default function Page() {
  return (
    <>
      <Header />

      <main>
        <section className="flex flex-col items-center justify-center gap-5 px-8 py-24 text-center md:py-36">
          <h1 className="font-heading text-5xl font-semibold md:text-6xl">
            {config.tagline}
          </h1>

          <h2 className="font-sans text-xl font-normal text-gray-700 md:mb-2 md:text-2xl">
            {config.appDescription}
          </h2>

          <iframe 
            src="https://www.youtube.com/embed/tifCNdZ2D6M?si=TvSPXuRUE0l19YLX"
            title="Supercog quick intro"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-[320px] h-[230px] sm:w-[560px] sm:h-[400px]"
          />
        </section>

        <MoveFaster />

        <section
          className="mx-auto max-w-7xl px-4 pb-24 pt-12 xl:px-0"
          id="features"
        >
          <div className="flex flex-col flex-wrap gap-6 md:flex-row">
            <div className="w-full">
              <FeatureCard
                icon={HiOutlineRectangleStack}
                title="Create smart agents using simple English instructions"
                subtitle="Unleash the power of frontier Large Language Models by connecting them live to your key applications."
                image="/homepage/supercog-ui.png"
              />
            </div>
            <div className="w-full md:w-[calc(50%-12px)]">
              <FeatureCard
                icon={BiBookHeart}
                title="Tools give your agents instant power and connectivity"
                subtitle="Connect to popular SaaS applications. Read and process files, and create custom tools for your agents."
                image="/homepage/supercog-tools.png"
              />
            </div>
            <div className="w-full md:w-[calc(50%-12px)]">
              <FeatureCard
                icon={HiOutlineCube}
                title="Agents can learn and self-correct"
                subtitle="Agents can automatically problem solve, learn, and autonomously improve over time."
                image="/homepage/supercog-learning.png"
              />
            </div>
          </div>
        </section>
        <IntegrationsBanner />
        <EnterpriseGrade />
        {/* todo: FAQ */}
        {/* todo: final CTA */}
        <CTA />
      </main>

      <Footer />
    </>
  );
}
