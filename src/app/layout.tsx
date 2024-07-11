import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head'


const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "3D Character Concept Art & Design | Hire Saad Irfan",
//   description: "I am Saad Irfan, a concept artist, 3D modeler and illustrator. My work includes The Glassworker, Flesh & Blood, Habrok MMA gear, and The Secret Life of Cooper Bennett. Let's bring your vision to life!",
//   image: "../public/logo.png", // Replace with your actual logo image URL
//   url:  "https://www.onebrushman.com" // Replace with your actual website URL
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const title = "3D Character Concept Art & Design | Hire Saad Irfan";
  const description = "I am Saad Irfan, a concept artist, 3D modeler and illustrator. My work includes The Glassworker, Flesh & Blood, Habrok MMA gear, and The Secret Life of Cooper Bennett. Let's bring your vision to life!";
  const image = "../public/logo.png"; // Replace with your actual logo image URL
  const url = "https://www.onebrushman.com"; // Replace with your actual website URL
  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
