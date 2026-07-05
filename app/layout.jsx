import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { ToastContainer } from "react-toastify";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Vivek's Portfolio",
  description: "Portfolio of Vivek Kumar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} relative overflow-x-hidden`}>
        {/* Ambient background glows */}
        <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bg-accent/5 rounded-full blur-[120px] xl:blur-[160px] fixed top-[-100px] right-[-100px] pointer-events-none -z-20" />
        <div className="w-[300px] h-[300px] xl:w-[600px] xl:h-[600px] bg-accent/5 rounded-full blur-[120px] xl:blur-[180px] fixed bottom-[-150px] left-[-150px] pointer-events-none -z-20" />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
