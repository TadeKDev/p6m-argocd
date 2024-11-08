import Link from 'next/link';
import config from '@/config';
import {HiArrowRight} from 'react-icons/hi2';

interface CTAProps {
  buttonText?: string;
}

const CTA = ({buttonText}: CTAProps) => {
  return (
    <section className="hero">
      <div className="hero-content px-8 py-24 text-center text-neutral-content">
        <div className="flex flex-col items-center p-8 md:p-0">
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-black md:text-3xl">
            Ready to put Supercog's AI agents to work?
          </h2>

          <Link
            className="btn btn-primary btn-wide mb-5"
            href={config.auth.loginUrl}
          >
            {buttonText ?? "Get Started"}{' '}
            <HiArrowRight className="h-4 w-4" />
          </Link>
          <p className="text-balance text-sm text-gray-500" style={{visibility: "hidden"}}>
            The full power of Supercog is free to use during the beta!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
