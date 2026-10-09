import "./globals.css";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://portfolio-website-ten-liard-13.vercel.app";

const description =
  "M.Tech student in AI and Data Science building deployed ML systems: RAG document assistants, emotion recognition, and explainable credit risk models.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Ramkrishnaji | ML Engineer and Data Scientist",
  description,
  authors: [{ name: "Ramkrishnaji" }],
  keywords: [
    "ML Engineer",
    "Data Scientist",
    "RAG",
    "LLM",
    "NLP",
    "FastAPI",
    "XGBoost",
    "Python",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ramkrishnaji | ML Engineer and Data Scientist",
    description,
    url: SITE_URL,
    type: "website",
    images: [{ url: "/profile.jpg", width: 800, height: 800 }],
  },
  twitter: {
    card: "summary",
    title: "Ramkrishnaji | ML Engineer and Data Scientist",
    description,
    images: ["/profile.jpg"],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#07070d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600;700&family=Syne:wght@700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
