import '@/styles/globals.css';

import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { Baloo_2 } from 'next/font/google';

import Script from 'next/script';

import mixpanel from 'mixpanel-browser';

const baloo = Baloo_2({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  mixpanel.init('330f0afc9184114dee3c33359c617395', { debug: true });

  useEffect(() => {
    router.events.on('routeChangeComplete', (url) => {
      mixpanel.track('Page View', { url });

      window.gtag('config', 'G-VT4FYXXHKH', {
        page_path: url,
      });
    });

    return () => {
      router.events.off('routeChangeComplete');
    };
  }, [Component, router.events]);

  return (
    <>
      <style jsx global>{`
        h1, h2, h3, h4, h5, h6 {
          font-family: ${baloo.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-CE21BVBLLS" strategy="afterInteractive"></Script>
      <Script
        id='google-analytics'
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CE21BVBLLS', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}
