import {ReactNode, Suspense} from 'react';
import {Inter} from 'next/font/google';
import {Viewport} from 'next';
import PlausibleProvider from 'next-plausible';
import {getSEOTags} from '@/libs/seo';
import ClientLayout from '@/components/LayoutClient';
import config from '@/config';
import { GoogleTagManager } from '@next/third-parties/google'
import './globals.css';

const GTM_TRACKING_ID = "GTM-W5DP68L4";

const font = Inter({subsets: ['latin']});

export const viewport: Viewport = {
  // Will use the primary color of your theme to show a nice theme color in the URL bar of supported browsers
  themeColor: config.colors.main,
  width: 'device-width',
  initialScale: 1,
};

// This adds default SEO tags to all pages in our app.
// You can override them in each page passing params to getSOTags() function.
export const metadata = getSEOTags();

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html lang="en" data-theme={config.colors.theme} className={font.className}>
      <GoogleTagManager gtmId={GTM_TRACKING_ID} />
      <head>
        {config.domainName && <PlausibleProvider domain={config.domainName} />}
      </head>
      <body className="min-h-screen">
        <ClientLayout>
          <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        </ClientLayout>
      </body>
    </html>
  );
}
