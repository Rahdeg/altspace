import type { Metadata, Viewport } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Space Tourism - Your Gateway to the Stars",
    template: "%s | Space Tourism"
  },
  description: "Explore space destinations, meet the crew, and learn about space technology. Embark on an extraordinary journey to space with our cutting-edge technology and expert crew.",
  keywords: ["space tourism", "space travel", "space exploration", "astronaut", "space adventure", "moon", "mars", "crew", "technology"],
  authors: [{ name: "Space Tourism Team" }],
  creator: "Space Tourism",
  publisher: "Space Tourism",
  metadataBase: new URL("https://space-tourism.com"),
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://space-tourism.com",
    title: "Space Tourism - Your Gateway to the Stars",
    description: "Explore space destinations, meet the crew, and learn about space technology. Embark on an extraordinary journey to space with our cutting-edge technology and expert crew.",
    siteName: "Space Tourism",
    images: [
      {
        url: "/assets/shared/logo.svg",
        width: 48,
        height: 48,
        alt: "Space Tourism Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Space Tourism - Your Gateway to the Stars",
    description: "Explore space destinations, meet the crew, and learn about space technology. Embark on an extraordinary journey to space with our cutting-edge technology and expert crew.",
    images: ["/assets/shared/logo.svg"],
  },
  icons: {
    icon: [
      { url: "/assets/shared/logo.svg", },

    ],
    apple: "/assets/shared/logo.svg",
    shortcut: "/assets/shared/logo.svg",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B0D17",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bellefair.variable} ${barlowCondensed.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
