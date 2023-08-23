'use client';
import NavBar from './components/NavBar';
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import { usePathname } from 'next/navigation';

export default function RootLayout({ children }) {
  const pathname = usePathname();

  return (
    <html lang="en">
      {pathname !== '/signup' && pathname !== '/signin' && <NavBar />}

      <body>{children}</body>
      <Footer />
    </html>
  );
}
