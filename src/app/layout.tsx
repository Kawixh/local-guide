import { TopNavigation } from "@/components/navigation/top-navigation";
import type { Metadata } from "next";
import { Funnel_Display, Playwrite_BE_WAL } from "next/font/google";
import "./globals.css";
import { PostHogProvider } from "./providers";

const funnelDisplay = Funnel_Display({
  weight: "variable",
  subsets: ["latin"],
  variable: "--font-funnel-display",
});

const playwrite = Playwrite_BE_WAL({
  weight: "variable",
  variable: "--font-playwrite",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </head>

      <body
        className={`${playwrite.variable} ${funnelDisplay.variable} antialiased bg-black p-3`}
      >
        <PostHogProvider>
          <div className="flex flex-col gap-3">
            <TopNavigation />
          </div>
          {children}
        </PostHogProvider>
      </body>
    </html>
  );
}
