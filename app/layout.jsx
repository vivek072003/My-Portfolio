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
      <body className={`${jetbrainsMono.variable} relative overflow-x-hidden transition-colors duration-300`}>
        {/* Ambient background glows */}
        <div className="w-[300px] h-[300px] xl:w-[500px] xl:h-[500px] bg-accent/5 rounded-full blur-[120px] xl:blur-[160px] fixed top-[-100px] right-[-100px] pointer-events-none -z-20" />
        <div className="w-[300px] h-[300px] xl:w-[600px] xl:h-[600px] bg-accent/5 rounded-full blur-[120px] xl:blur-[180px] fixed bottom-[-150px] left-[-150px] pointer-events-none -z-20" />

        {/* Background Grid Pattern (always present, softer in dark mode) */}
        <div className="fixed inset-0 pointer-events-none -z-30 dark-grid-opacity transition-opacity duration-300">
          <div className="w-full h-full bg-grid-pattern" />
        </div>

        {/* Light Mode Color Orbs (6 wide, high intensity, clockwise rotating 30s) */}
        <div className="light-only fixed inset-0 pointer-events-none -z-20 overflow-hidden flex justify-center items-center">
          <div className="w-[1100px] h-[1100px] xl:w-[1400px] xl:h-[1400px] relative animate-spin-slow shrink-0">
            {/* Green */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 xl:w-96 xl:h-96 bg-emerald-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
            {/* Purple */}
            <div className="absolute top-1/4 right-[5%] w-80 h-80 xl:w-96 xl:h-96 bg-purple-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
            {/* Blue */}
            <div className="absolute bottom-1/4 right-[5%] w-80 h-80 xl:w-96 xl:h-96 bg-cyan-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
            {/* Pink */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 xl:w-96 xl:h-96 bg-rose-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
            {/* Orange */}
            <div className="absolute bottom-1/4 left-[5%] w-80 h-80 xl:w-96 xl:h-96 bg-amber-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
            {/* Red */}
            <div className="absolute top-1/4 left-[5%] w-80 h-80 xl:w-96 xl:h-96 bg-red-400/25 rounded-full blur-[80px] xl:blur-[100px]" />
          </div>
        </div>

        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
        <ToastContainer position="top-right" />
      </body>
    </html>
  );
}
