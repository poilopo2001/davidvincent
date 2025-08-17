import type { Metadata } from "next";
import { Inter, Oswald, Bebas_Neue, Kalam } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter" 
});

const oswald = Oswald({ 
  subsets: ["latin"], 
  variable: "--font-oswald",
  weight: ["200", "300", "400", "500", "600", "700"]
});

const bebasNeue = Bebas_Neue({ 
  subsets: ["latin"], 
  variable: "--font-bebas",
  weight: ["400"]
});

const kalam = Kalam({
  subsets: ["latin"],
  variable: "--font-kalam",
  weight: ["300", "400", "700"]
});

export const metadata: Metadata = {
  title: "Rock, noise, cold wave, David Vincent | Arles",
  description: "David Vincent est un groupe originaire d'Arles. Le duo qualifie sa musique de rock, au sens très large du terme, il peut aller d'un titre 100% électronique à un titre complètement instrumental, chanter en anglais comme en français.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${oswald.variable} ${bebasNeue.variable} ${kalam.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
