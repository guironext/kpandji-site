import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoCraft - Premium Car Dealership",
  description: "Discover and build your dream car with AutoCraft. Premium vehicles, custom builds, and exceptional service.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const pathname = headersList.get("x-pathname") || "";
  const hideHeader = pathname.startsWith("/entretien");

  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning={true}
        >
        <div className="min-h-screen bg-gradient-to-br from-amber-900 via-orange-900 to-yellow-900">
          {!hideHeader && <Header />}
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
    </ClerkProvider>
  );
}
