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
            <main className="pt-[60px] overflow-hidden">{children}</main>
        </>
    );
}
