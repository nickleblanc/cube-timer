import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Link from "next/link";
import Provider from "@/lib/Providers";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cube Timer",
  description:
    "Cube Timer is a Rubik's Cube timer designed for speedsolvers to time their solves and track their progress.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex h-screen flex-col">
              <Provider>{children}</Provider>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </SessionProvider>
  );
}
