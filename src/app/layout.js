import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

const hanken_Grotesk = Hanken_Grotesk({ subsets: ["latin"] });

export const metadata = {
  title: "IEEE HIT SB",
  description: "This is the official website of IEEE HIT SB.",
  icons: {
    icon: "./icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={hanken_Grotesk.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
