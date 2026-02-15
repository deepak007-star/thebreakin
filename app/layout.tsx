import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "thebreakin | Your Corporate Career Journey Starts Here",
  description: "Land your dream job in the United States. We help international job seekers with resume optimization, job applications, interview prep, visa guidance, and mentorship.",
  keywords: ["US jobs", "H1B visa", "OPT jobs", "STEM OPT", "job search", "career coaching", "resume optimization", "interview preparation"],
  authors: [{ name: "thebreakin" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thebreakin.org",
    siteName: "thebreakin",
    title: "thebreakin | Your US Career Journey Starts Here",
    description: "Land your dream job in the United States. Expert job search assistance for international professionals.",
  },
  twitter: {
    card: "summary_large_image",
    title: "thebreakin | Your US Career Journey Starts Here",
    description: "Land your dream job in the United States. Expert job search assistance for international professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                } else {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
