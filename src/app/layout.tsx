import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import Nav from "@/components/Nav";

// Note: this build environment cannot reach Google Fonts, so the display
// and body fonts are provided via system font stacks defined in
// globals.css (--font-display / --font-body custom properties) rather
// than next/font/google. Swap in Space_Grotesk/Inter via next/font/google
// if deploying from an environment with unrestricted network access.

export const metadata: Metadata = {
  title: "Destiny — The Complete Encyclopedia of the Universe",
  description:
    "A non-commercial fan tribute encyclopedia covering the complete lore, characters, history, and legacy of Destiny and Destiny 2.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">
        <CustomCursor />
        <Nav />
        {children}
      </body>
    </html>
  );
}
