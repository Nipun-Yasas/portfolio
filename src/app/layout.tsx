import type { Metadata } from "next";
import "./globals.css";
import React from "react";
import ClientLayout from "./_components/ClientLayout";

export const metadata: Metadata = {
  title: {
    default: "Nipun Yasas | Full Stack Developer",
    template: "%s | Nipun Yasas",
  },
  description:
    "Full Stack Developer specializing in Next.js, React, Spring Boot, and modern web technologies. Explore my projects, skills, and experience in building scalable web applications.",
  keywords: [
    "Nipun Yasas",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React",
    "Spring Boot",
    "TypeScript",
    "Portfolio",
    "Software Engineer",
  ],
  authors: [{ name: "Nipun Yasas" }],
  creator: "Nipun Yasas",
  publisher: "Nipun Yasas",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Nipun Yasas | Full Stack Developer",
    description:
      "Full Stack Developer specializing in Next.js, React, Spring Boot, and modern web technologies.",
    siteName: "Nipun Yasas Portfolio",
    images: [
      {
        url: "/profile.png", 
        width: 1200,
        height: 630,
        alt: "Nipun Yasas Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nipun Yasas | Full Stack Developer",
    description: "Full Stack Developer specializing in Next.js, React, Spring Boot, and modern web technologies.",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta 
          name="description" 
          content="Full Stack Developer specializing in Next.js, React, Spring Boot, and modern web technologies. Explore my projects, skills, and experience in building scalable web applications."
        />
        <link
          rel="canonical"
          href={process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
