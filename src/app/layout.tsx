import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Mark Valdez Portfolio",
  description: "San Francisco based software engineer",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function TopNav() {
  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between w-full p-4 border-b border-gray-700 text-xl font-semibold">
      <a href="/" className="text-white">Portfolio</a>
      <a href="/about" className="text-white">About</a>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <TopNav />
        <div className="w-full">

          {children}
        </div>
      </body>
    </html>
  );
}
