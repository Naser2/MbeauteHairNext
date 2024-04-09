import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Africa Rentals Properties",
  description: "Find your dream properties",
  keywords:"Rentals, Find Properties, housing, real estate"
};

export default function MainLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}><div>{children}</div></body>
    </html>
  );
}
