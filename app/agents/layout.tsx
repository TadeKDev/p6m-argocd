import {Suspense} from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function LayoutAgents({children}: {children: any}) {
  return (
    <div>
      <Suspense>
        <Header />
      </Suspense>

      <main className="mx-auto max-w-6xl p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}