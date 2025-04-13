"use client";

// import Header from '@/components/Header';
// import Footer from '@/components/Footer';
import { ReactNode } from 'react';

interface MainLayoutProps {
    children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="flex flex-col min-h-screen">
            {/*<Header />*/}
            <main className="flex-grow">
                {children}
            </main>
            {/*<Footer />*/}
        </div>
    );
}
