import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import ThemeRegistry from "./ThemeRegistry";
import "./globals.css";

const BASE_URL = "https://vishalgaur.dev";

export const metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Vishal Gaur | Android Developer & Software Engineer",
    template: "%s | Vishal Gaur",
  },
  description:
    "Vishal Gaur is a Software Developer specializing in Android development with Kotlin and Jetpack Compose, and Web Development with React and Next.js. SDE-2 at Testbook, formerly at Paytm.",
  keywords: [
    "Vishal Gaur",
    "software developer",
    "android developer",
    "mobile developer",
    "kotlin developer",
    "jetpack compose",
    "android engineer",
    "react developer",
    "next.js developer",
    "india",
    "testbook",
  ],
  authors: [{ name: "Vishal Gaur", url: BASE_URL }],
  creator: "Vishal Gaur",
  publisher: "Vishal Gaur",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    siteName: "Vishal Gaur",
    title: "Vishal Gaur | Android Developer & Software Engineer",
    description:
      "Software Developer specializing in Android (Kotlin/Compose) and Web (React/Next.js). SDE-2 at Testbook, formerly at Paytm.",
    images: [
      {
        url: "https://github.com/i-vishi.png?size=500",
        width: 500,
        height: 500,
        alt: "Vishal Gaur",
      },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    site: "@iamvishalgaur",
    creator: "@iamvishalgaur",
    title: "Vishal Gaur | Android Developer & Software Engineer",
    description:
      "Software Developer specializing in Android (Kotlin/Compose) and Web (React/Next.js).",
    images: ["https://github.com/i-vishi.png?size=500"],
  },
  icons: { icon: "/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  themeColor: "#002438",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vishal Gaur",
  url: BASE_URL,
  jobTitle: "Software Developer",
  description:
    "Android Developer and Software Engineer specializing in Kotlin, Jetpack Compose, and React/Next.js.",
  sameAs: [
    "https://github.com/i-vishi",
    "https://linkedin.com/in/i-vishi",
    "https://twitter.com/iamvishalgaur",
  ],
  knowsAbout: [
    "Android Development",
    "Kotlin",
    "Jetpack Compose",
    "MVVM",
    "React",
    "Next.js",
    "Web Development",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Testbook",
    url: "https://testbook.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Oxygen&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <AppRouterCacheProvider>
          <ThemeRegistry>{children}</ThemeRegistry>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
