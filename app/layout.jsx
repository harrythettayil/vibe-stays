import { Inter } from "next/font/google";
import '@/assets/styles/globals.css';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthWrapper from "@/components/AuthWrapper";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets : ['latin']});

export const metadata = {
  title: "Boardrooms",
  description: "Meeting rooms quickly and easily for any business need.",
};

export default function RootLayout({ children }) {
  return (
    <AuthWrapper>
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Header />
        <main className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
            {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
    </AuthWrapper>
  );
}
