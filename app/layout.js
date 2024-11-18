import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../public/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../public/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Rafflo",
  description: "Donating should be easy and fun",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
          antialiased min-h-screen text-white 
          bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 p-8`}
      >
        {children}
      </body>
    </html>
  );
}
