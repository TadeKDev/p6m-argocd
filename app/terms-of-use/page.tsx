import Link from 'next/link';
import {getSEOTags} from '@/libs/seo';
import config from '@/config';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = getSEOTags({
  title: `Terms of Use | ${config.appName}`,
});

const TOS = () => {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-screen max-w-7xl space-y-8 px-4 py-12 xl:px-0">
        <h1 className="text-3xl font-extrabold">
          Terms of Use {config.appName}, Inc.
        </h1>
        <article className="prose prose-sm max-w-none">
          <p className="mb-4 text-sm text-gray-500">
            Last Updated: August 30, 2024
          </p>

          <p>
            By accessing or using our website at https://{config.domainName}{' '}
            (the "Site") or our services, you agree to be bound by these Terms
            of Service ("Terms"). If you do not agree to these Terms, please do
            not use our Site or services.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">1. Services</h3>
          <p>
            {config.appName}, Inc provides a generative AI platform using agents
            for data integrations and automation ("Services"). We offer our
            Services on a freemium SaaS model.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">2. User Accounts</h3>
          <p>
            To access certain features of our Services, you may be required to
            create an account. You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">3. User Data</h3>
          <p>
            We collect and process personal data, including your name, email,
            and payment information, as necessary to provide our Services. For
            more information on how we handle your data, please refer to our{' '}
            <Link
              href="/privacy-policy"
              className="text-primary hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            4. Non-Personal Data Collection
          </h3>
          <p>
            We use web cookies and similar technologies to collect non-personal
            data to improve our Services and your experience on our Site.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            5. Intellectual Property
          </h3>
          <p>
            All content and materials available on the Site and through our
            Services, including but not limited to text, graphics, website name,
            code, images, and logos, are the intellectual property of{' '}
            {config.appName} and are protected by applicable copyright and
            trademark law.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">6. Acceptable Use</h3>
          <p>
            You agree not to use the Services for any unlawful purpose or in any
            way that could damage, disable, overburden, or impair our servers or
            networks.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            7. Disclaimer of Warranties
          </h3>
          <p>
            The Services are provided "as is" and "as available" without any
            warranties of any kind, either express or implied.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            8. Limitation of Liability
          </h3>
          <p>
            To the fullest extent permitted by applicable law, {config.appName}{' '}
            shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages, or any loss of profits or
            revenues.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">9. Termination</h3>
          <p>
            We reserve the right to terminate or suspend your account and access
            to the Services at our sole discretion, without notice, for conduct
            that we believe violates these Terms or is harmful to other users,
            us, or third parties, or for any other reason.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">10. Governing Law</h3>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the State of California, without regard to its conflict
            of law provisions.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            11. Changes to Terms
          </h3>
          <p>
            We reserve the right to modify these Terms at any time. For
            registered users, we will notify you of any changes by sending an
            email to the address associated with your account.
          </p>

          <h3 className="mb-2 mt-6 text-xl font-semibold">
            12. Contact Information
          </h3>
          <p>
            If you have any questions about these Terms, please contact us at{' '}
            <a
              href={`mailto:${config.mailgun.forwardRepliesTo}`}
              className="text-primary hover:underline"
            >
              {config.mailgun.forwardRepliesTo}
            </a>
            .
          </p>

          <p className="mt-8">
            By using {config.appName}, you acknowledge that you have read and
            understood these Terms and agree to be bound by them.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
};

export default TOS;
