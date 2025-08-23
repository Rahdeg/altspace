import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Space Tourism Website",
  description: "Explore space destinations, meet the crew, and learn about space technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
