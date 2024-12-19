import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Geist, Geist_Mono } from "next/font/google";
import "./../globals.css";
import Navigation from './Navigation';
import NextTopLoader from 'nextjs-toploader';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "Only authenticated users",
};

export default async function RootLayout({ children }) {
  // Await cookies() to ensure proper handling
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  // Optional: Add token validation logic if needed
  if (!token) {
    redirect('/');
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextTopLoader height={5} color="#fff"
        />
        <Navigation />
        {children}
      </body>
    </html>
  );
}
