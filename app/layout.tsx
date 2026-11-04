import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const headingFont = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#e6007e",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.splashpiscinas.com.br"),
  title:
    "Splash Piscinas Lagoa Santa — Sua Piscina dos Sonhos | Exclusividade iGUi",
  description:
    "Sua piscina dos sonhos está aqui! Mais de 500 famílias realizadas com a Splash Piscinas em Lagoa Santa e região. Piscinas de fibra premium com garantia iGUi, filtros ecológicos, aquecimento, iluminação e cascatas. Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund. WhatsApp: (31) 97529-9630.",
  keywords: [
    "Splash Piscinas",
    "Splash Piscinas Lagoa Santa",
    "Splash Lagoa Santa",
    "Piscinas Lagoa Santa",
    "Piscinas de Fibra Lagoa Santa",
    "iGUi Lagoa Santa",
    "Piscinas iGUi Minas Gerais",
    "Loja de piscinas Av Nilo Figueiredo",
    "Dr Lund Lagoa Santa piscinas",
    "Aquecedores para piscina Lagoa Santa",
    "Filtros para piscina Splash",
    "Cascatas e iluminação LED para piscinas",
    "Manutenção de piscinas Lagoa Santa",
    "Piscina dos sonhos Lagoa Santa",
  ],
  authors: [{ name: "Splash Piscinas — Lagoa Santa - MG" }],
  creator: "Splash Piscinas Lagoa Santa",
  publisher: "Splash Piscinas",
  formatDetection: {
    telephone: true,
    address: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=sp1", sizes: "any" },
      { url: "/icon-32x32.png?v=sp1", type: "image/png", sizes: "32x32" },
      { url: "/icon-16x16.png?v=sp1", type: "image/png", sizes: "16x16" },
      { url: "/icon-48x48.png?v=sp1", type: "image/png", sizes: "48x48" },
      { url: "/icon-192x192.png?v=sp1", type: "image/png", sizes: "192x192" },
      { url: "/icon.png?v=sp1", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico?v=sp1",
    apple: [{ url: "/apple-icon.png?v=sp1", sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.splashpiscinas.com.br",
    title:
      "Splash Piscinas Lagoa Santa — Sua Piscina dos Sonhos | Exclusividade iGUi",
    description:
      "Piscinas de fibra com a garantia da maior rede do mundo (iGUi), instalação rápida e +500 famílias realizadas em Lagoa Santa e região. WhatsApp: (31) 97529-9630.",
    siteName: "Splash Piscinas Lagoa Santa",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Splash Piscinas — Lagoa Santa - MG",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    name: "Splash Piscinas Lagoa Santa",
    alternateName: "Splash Piscinas — Exclusividade iGUi",
    description:
      "Loja oficial Splash Piscinas em Lagoa Santa - MG. Piscinas de fibra de alta durabilidade com tecnologia iGUi, sistemas de filtragem inteligentes, aquecedores, cascatas, iluminação e assistência completa.",
    telephone: "+553136880808",
    url: "https://www.splashpiscinas.com.br",
    image: "https://www.splashpiscinas.com.br/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Acdo. Nilo Figueiredo, 3280 - Dr. Lund",
      addressLocality: "Lagoa Santa",
      addressRegion: "MG",
      postalCode: "33400-000",
      addressCountry: "BR",
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.1",
      reviewCount: "40",
    },
    areaServed: [
      "Lagoa Santa",
      "Vespasiano",
      "Confins",
      "Pedro Leopoldo",
      "São José da Lapa",
      "Santa Luzia",
      "Belo Horizonte",
      "Grande BH",
      "Serra do Cipó",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/splashlagoasanta/",
      "https://www.splashpiscinas.com.br/",
      "https://wa.me/5531975299630",
    ],
  };

  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#f8fafc] text-[#0f172a] antialiased selection:bg-[#e6007e] selection:text-[#ffffff]">
        {children}
      </body>
    </html>
  );
}
