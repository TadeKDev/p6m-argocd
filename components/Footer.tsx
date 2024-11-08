import Link from 'next/link';
import Image from 'next/image';
import config from '@/config';
import logo from '@/app/icon-alt.png';

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.mailgun.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="border-t border-base-content/10">
      <div className="mx-auto max-w-7xl px-8 py-12 md:py-24">
        <div className="flex flex-col flex-wrap md:flex-row md:flex-nowrap lg:items-start">
          <div className="mx-auto max-w-96 flex-shrink-0 text-center md:mx-0 md:w-64 md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex items-center justify-center gap-2 md:justify-start"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="h-6 w-6"
                width={24}
                height={24}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <span
                className="-ml-0.5 text-xl font-bold"
                dangerouslySetInnerHTML={{__html: config.appNameStyled}}
              />
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
          </div>
          <div className="-mb-10 mt-10 flex flex-grow flex-wrap justify-center text-center md:mt-0">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title mb-3 text-sm font-semibold tracking-widest text-base-content md:text-left">
                LINKS
              </div>

              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                {config.mailgun.supportEmail && (
                  <a
                    href={`mailto:${config.mailgun.supportEmail}`}
                    target="_blank"
                    className="link-hover link"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link
                  href="https://github.com/supercog-ai/community/discussions"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="link-hover link"
                >
                  Community
                </Link>
                <Link
                  href="https://github.com/supercog-ai/community/wiki"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="link-hover link"
                >
                  Docs / Wiki
                </Link>
                <Link href="/blog" className="link-hover link">
                  Blog
                </Link>
                <Link href="https://www.youtube.com/@supercog-ai" className="link-hover link">
                  YouTube Channel
                </Link>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="footer-title mb-3 text-sm font-semibold tracking-widest text-base-content md:text-left">
                LEGAL
              </div>

              <div className="mb-10 flex flex-col items-center justify-center gap-2 text-sm md:items-start">
                <Link href="/terms-of-use" className="link-hover link">
                  Terms of Use
                </Link>
                <Link href="/privacy-policy" className="link-hover link">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
