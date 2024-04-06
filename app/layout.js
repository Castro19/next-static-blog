import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "My Software Development Journey",
  description: "by Cristian Castro Oliva",
};
export default function RootLayout({ children }) {
  let header = (
    <header className="bg-gray-800 text-white py-2">
      {" "}
      {/* Reduced padding */}
      <div className="container mx-auto flex justify-center">
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl font-bold hover:text-gray-200 cursor-pointer">
            My Software Development Journey
          </h1>
        </Link>
      </div>
    </header>
  );

  let footer = (
    <footer className="bg-gray-800 text-white py-2 mt-4">
      {" "}
      {/* Reduced padding and margin */}
      <div className="container mx-auto flex justify-center">
        <p className="text-center text-sm">Made by Cristian Castro Oliva</p>
      </div>
    </footer>
  );

  return (
    <html lang="en" suppressHydrationWarning className="h-full">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {header}
        <main className="flex-grow px-4 py-2 overflow-auto">
          {" "}
          {/* Use flex-grow and overflow-auto */}
          {children}
        </main>
        {footer}
      </body>
    </html>
  );
}
