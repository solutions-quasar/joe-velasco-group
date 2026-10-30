import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Joe Velasco Group | Silicon Valley Luxury Real Estate | $2.6B+ Career Volume",
  description:
    "Silicon Valley luxury real estate authority Joe Velasco with over $2.6 billion in career sales and 20+ years representing premier estates across Los Gatos, Saratoga, Palo Alto, Atherton, and the Peninsula. Coldwell Banker Global Luxury.",
  keywords: [
    "Joe Velasco",
    "Joe Velasco Group",
    "Silicon Valley luxury real estate",
    "Los Gatos luxury homes",
    "Palo Alto real estate",
    "Saratoga luxury estates",
    "Atherton homes for sale",
    "Coldwell Banker Global Luxury Los Gatos",
    "CA DRE 01309200",
  ],
  authors: [{ name: "Joe Velasco", url: "https://joevelascogroup.com" }],
  creator: "Joe Velasco Group",
  publisher: "Coldwell Banker Global Luxury",
  metadataBase: new URL("https://joevelascogroup.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Joe Velasco Group | Silicon Valley Luxury Real Estate",
    description:
      "Over $2.6B in career sales and two decades of elite luxury representation in Silicon Valley, Los Gatos, and the San Francisco Peninsula.",
    url: "https://joevelascogroup.com",
    siteName: "Joe Velasco Group",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Joe Velasco Group Silicon Valley Luxury Real Estate",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joe Velasco Group | Silicon Valley Luxury Real Estate",
    description:
      "Over $2.6B in career volume. Premier luxury representation across Silicon Valley.",
    images: ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&h=630&q=85"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": "https://joevelascogroup.com/#organization",
        "name": "Joe Velasco Group",
        "url": "https://joevelascogroup.com",
        "logo": "https://joevelascogroup.com/images/joe-velasco.jpg",
        "image": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
        "telephone": "+1-650-833-8498",
        "email": "joe.velasco@cbrealty.com",
        "priceRange": "$$$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "410 N Santa Cruz Ave",
          "addressLocality": "Los Gatos",
          "addressRegion": "CA",
          "postalCode": "95030",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "37.2280",
          "longitude": "-121.9839"
        },
        "parentOrganization": {
          "@type": "Organization",
          "name": "Coldwell Banker Global Luxury"
        },
        "areaServed": [
          "Los Gatos",
          "Saratoga",
          "Palo Alto",
          "Atherton",
          "Los Altos",
          "Menlo Park",
          "Woodside",
          "Monte Sereno",
          "Cupertino"
        ]
      },
      {
        "@type": "Person",
        "@id": "https://joevelascogroup.com/#agent",
        "name": "Joe Velasco",
        "jobTitle": "Principal Luxury Broker Associate",
        "worksFor": {
          "@id": "https://joevelascogroup.com/#organization"
        },
        "telephone": "+1-650-833-8498",
        "email": "joe.velasco@cbrealty.com",
        "knowsAbout": [
          "Silicon Valley Luxury Real Estate",
          "Residential Development Advisory",
          "High-Net-Worth Portfolio Marketing"
        ]
      }
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
