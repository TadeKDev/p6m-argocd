import * as React from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default async function LayoutBlog({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <React.Suspense>
        <Header />
      </React.Suspense>

      <main className="mx-auto min-h-screen max-w-6xl p-8">{children}</main>

      <div className="h-24" />

      <Footer />
    </div>
  );
}
