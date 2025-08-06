'use client';

import { useState } from 'react';
import Preloader from './Preloader';
import { Header } from './Header';

export default function AppLayout({ children }) {
    const [loadingComplete, setLoadingComplete] = useState(false);

    if (!loadingComplete) {
        return <Preloader onComplete={() => setLoadingComplete(true)} />;
    }

    return (
        <>
            <Header />
            <main className="pt-[60px] max-w-[100vw] bg-gradient-to-br from-gray-100 dark:from-gray-900 via-gray-100 dark:via-gray-800 to-white dark:to-gray-900 min-h-screen text-gray-950 dark:text-gray-200">{children}</main>
        </>
    );
}
