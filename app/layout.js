import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="h-full">
      <body className={`h-full flex flex-col ${inter.className}`}>
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
