import type { Metadata } from "next";
import { Fira_Sans_Condensed, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/Navbar";




const firaSansCondensed = Fira_Sans_Condensed({
  variable: "--font-fira",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});
export const metadata: Metadata = {
  title: "Portfolio",
  description: "A Modern Animated Portfolio Site.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body
        className={`${firaSansCondensed.variable} font-outfit ${outfit.variable} text-accent-foreground bg-accent  antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div>
                <div className="h-24  border-b-2 drop-shadow-border">
                    <div className="max-w-350 h-full w-full mx-auto">
                        <Navbar />
                    </div>
                </div>
                <div className="h-[calc(100vh-6rem)]  mx-auto">
                    {children}
                </div>
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
