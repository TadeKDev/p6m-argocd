'use client';

import {useState, useEffect} from 'react';
import type {JSX} from 'react';
import {useSearchParams} from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ButtonSignin from './ButtonSignin';
import logo from '@/app/icon-alt.png';
import config from '@/config';

const links: {
  href: string;
  label: string;
}[] = [
  {
    href: '/#features',
    label: 'Features',
  },
  // {
  //   href: "/#testimonials",
  //   label: "Reviews",
  // },
  // {
  //   href: "/#faq",
  //   label: "FAQ",
  // },
  // {
  //   href: "/integrations",
  //   label: "Integrations",
  // },
  {
    href: '/blog',
    label: 'Blog',
  },
];

// TODO: incorporate the blog categories from <HeaderBlog.tsx> into this file (both desktop and mobile)

const cta: JSX.Element = (
  <>
    <Link href={config.auth.loginUrl} className="btn btn-primary md:btn-sm">
      Get Started
    </Link>
    <ButtonSignin extraStyle="md:btn-sm btn-outline " />
    <div className="relative h-10 w-20">
      <Link href="https://discord.gg/PYqM6hZZ">
        <Image
          src={"/homepage/join-us-on-discord.png"}
          alt={"Discord"}
          fill
          style={{
            objectFit: 'contain',
          }}
        />
      </Link>
    </div>
  </>
);

// A header with a logo on the left, links in the center (like Pricing, etc...), and a CTA (like Sign Up For Free or Login) on the right.
// The header is responsive, and on mobile, the links are hidden behind a burger button.
const Header = () => {
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // setIsOpen(false) when the route changes (i.e: when the user clicks on a link on mobile)
  useEffect(() => {
    setIsOpen(false);
  }, [searchParams]);

  return (
    <header className="border-b">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 xl:px-0"
        aria-label="Global"
      >
        {/* Your logo/name on large screens */}
        <div className="flex lg:flex-1">
          <Link
            className="flex shrink-0 items-center gap-2"
            href="/"
            title={`${config.appName} homepage`}
          >
            <Image
              src={logo}
              alt={`${config.appName} logo`}
              className="w-7"
              placeholder="blur"
              priority={true}
              width={32}
              height={32}
              style={{
                maxWidth: '100%',
                height: 'auto',
              }}
            />
            <span
              className="text-lg font-bold"
              dangerouslySetInnerHTML={{__html: config.appNameStyled}}
            />
          </Link>
        </div>
        {/* Burger button to open menu on mobile */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setIsOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 text-base-content"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Your links on large screens */}
        <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-12">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="link-hover link"
              title={link.label}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA on large screens */}
        <div className="hidden space-x-2 lg:flex lg:flex-1 lg:justify-end items-center">
          {cta}
        </div>
      </nav>

      {/* Mobile menu, show/hide based on menu state. */}
      <div className={`relative z-50 ${isOpen ? '' : 'hidden'}`}>
        <div
          className={`fixed inset-y-0 right-0 z-10 w-full origin-right transform overflow-y-auto bg-white px-4 py-4 transition duration-300 ease-in-out sm:max-w-sm sm:ring-1 sm:ring-neutral/10`}
        >
          {/* Your logo/name on small screens */}
          <div className="flex items-center justify-between">
            <Link
              className="flex shrink-0 items-center gap-2"
              title={`${config.appName} homepage`}
              href="/"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                className="w-8"
                placeholder="blur"
                priority={true}
                width={32}
                height={32}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
              <span
                className="-ml-1 text-lg font-bold"
                dangerouslySetInnerHTML={{__html: config.appNameStyled}}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Your links on small screens */}
          <div className="mt-6 flow-root">
            <div className="py-4">
              <div className="flex flex-col items-start gap-y-4">
                {links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="link-hover link"
                    title={link.label}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="divider"></div>
            {/* Your CTA on small screens */}
            <div className="flex flex-col space-y-4">{cta}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
