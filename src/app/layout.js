import { Jost, Roboto_Mono } from 'next/font/google';
import '@/styles/main.scss';

const fontJost = Jost({
  subsets: ['latin'],
  variable: '--font-jost',
  display: 'swap',
});

const fontRoboto = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto',
  display: 'swap',
});
import Script from 'next/script';
import { cookies } from 'next/headers';

export const metadata = {
  title: 'Alejandro Delgado - UX/UI Web Designer Portfolio',
  description: 'UX/UI designer with over 14 years of experience in e-commerce, pharmaceutical and National industry projects. Expert in Figma, Adobe XD, HTML, CSS, SASS and JavaScript.',
  keywords: 'FIGMA, Adobe XD, Mockeup, Wireframing, Web Design, Development, Diseño Web, Maquetado y Desarrollo Web, UI, UX',
  openGraph: {
    title: 'Alejandro Delgado - UX/UI Web Designer Portfolio',
    description: 'UX/UI designer with over 14 years of experience in e-commerce, pharmaceutical and National industry projects. Expert in Figma, Adobe XD, HTML, CSS, SASS and JavaScript.',
    url: 'https://www.aledesign.dev',
    siteName: 'Alejandro Delgado',
    images: [
      {
        url: 'https://www.aledesign.dev/images/aledesign-avatar.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alejandro Delgado - UX/UI Web Designer Portfolio',
    description: 'UX/UI designer with over 14 years of experience in e-commerce, pharmaceutical and National industry projects. Expert in Figma, Adobe XD, HTML, CSS, SASS and JavaScript.',
    creator: '@alejandropd_1',
    images: ['https://www.aledesign.dev/images/aledesign-avatar.png'],
  },
};

export default async function RootLayout({ children }) {
  // Read theme cookie
  const cookieStore = await cookies();
  const themeCookie = cookieStore.get('color-theme');
  const theme = themeCookie?.value || 'light';

  // Schema markup metadata
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Alejandro Delgado',
    jobTitle: 'UX/UI Web Designer',
    url: 'https://www.aledesign.dev',
    sameAs: [
      'https://www.linkedin.com/in/alejandropdelgado/',
      'https://github.com/alejandropd-1',
      'https://www.youtube.com/@alejandropd_1',
      'https://mastodon.social/@alejandropd',
      'https://bsky.app/profile/aledesign.dev'
    ],
    email: 'apdelgado@gmail.com',
    telephone: '+541160513261',
    image: 'https://www.aledesign.dev/images/aledesign-avatar.png',
    description: 'UX/UI designer with over 14 years of experience in e-commerce, pharmaceutical and National industry projects. Expert in Figma, Adobe XD, HTML, CSS, SASS and JavaScript.'
  };

  return (
    <html lang="en" data-theme={theme} className={`${fontJost.variable} ${fontRoboto.variable}`}>
      <head>
        <Script
          src="https://kit.fontawesome.com/e0025567be.js"
          crossOrigin="anonymous"
          strategy="lazyOnload"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics & Tag Manager */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-JGHRGD2X1R" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-JGHRGD2X1R');
          `}
        </Script>

        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KNVXGZVD');
          `}
        </Script>

        {/* Cookiebot */}
        <Script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="074a6ccd-5d9d-41e4-bf3b-1dd463bf4e0c"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNVXGZVD"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  );
}
