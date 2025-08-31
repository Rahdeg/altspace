import { Metadata } from "next";

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string[];
  openGraph?: {
    title: string;
    description: string;
    images?: string[];
  };
}

export const siteMetadata = {
  name: "Space Tourism",
  description:
    "Explore space destinations, meet the crew, and learn about space technology",
  url: "https://space-tourism.com",
  ogImage: "/assets/shared/logo.svg",
  twitterCard: "summary_large_image",
};

export const pagesMetadata: Record<string, PageMetadata> = {
  home: {
    title: "Space Tourism - Home",
    description:
      "Embark on an extraordinary journey to space. Experience the thrill of space exploration with our cutting-edge technology and expert crew.",
    keywords: [
      "space tourism",
      "space travel",
      "space exploration",
      "astronaut",
      "space adventure",
    ],
    openGraph: {
      title: "Space Tourism - Your Gateway to the Stars",
      description:
        "Embark on an extraordinary journey to space. Experience the thrill of space exploration with our cutting-edge technology and expert crew.",
      images: ["/assets/home/background-home-desktop.jpg"],
    },
  },
  destination: {
    title: "Space Destinations - Moon, Mars, Europa & Titan",
    description:
      "Choose your space destination from our carefully curated selection of celestial bodies. From the Moon to Mars, explore the wonders of our solar system.",
    keywords: [
      "space destinations",
      "moon",
      "mars",
      "europa",
      "titan",
      "solar system",
      "planets",
    ],
    openGraph: {
      title: "Space Destinations - Choose Your Adventure",
      description:
        "Choose your space destination from our carefully curated selection of celestial bodies. From the Moon to Mars, explore the wonders of our solar system.",
      images: ["/assets/destination/background-destination-desktop.jpg"],
    },
  },
  crew: {
    title: "Meet Our Space Crew - Astronauts & Specialists",
    description:
      "Meet the exceptional crew members who will guide your space journey. From commanders to specialists, discover the experts behind your space adventure.",
    keywords: [
      "space crew",
      "astronauts",
      "space specialists",
      "crew members",
      "space experts",
    ],
    openGraph: {
      title: "Meet Our Space Crew - Your Journey Guides",
      description:
        "Meet the exceptional crew members who will guide your space journey. From commanders to specialists, discover the experts behind your space adventure.",
      images: ["/assets/crew/background-crew-desktop.jpg"],
    },
  },
  technology: {
    title: "Space Technology - Launch Vehicles & Spacecraft",
    description:
      "Discover the cutting-edge technology that powers space exploration. From launch vehicles to space capsules, explore the engineering marvels of space travel.",
    keywords: [
      "space technology",
      "launch vehicles",
      "spacecraft",
      "space engineering",
      "rocket technology",
    ],
    openGraph: {
      title: "Space Technology - Engineering the Future",
      description:
        "Discover the cutting-edge technology that powers space exploration. From launch vehicles to space capsules, explore the engineering marvels of space travel.",
      images: ["/assets/technology/background-technology-desktop.jpg"],
    },
  },
};

export function generateMetadata(page: string): Metadata {
  const pageMeta = pagesMetadata[page] || pagesMetadata.home;

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: pageMeta.keywords,
    authors: [{ name: "Space Tourism Team" }],
    creator: "Space Tourism",
    publisher: "Space Tourism",
    alternates: {
      canonical: `${siteMetadata.url}/${page === "home" ? "" : page}`,
    },
  };
}
