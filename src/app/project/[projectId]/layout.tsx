'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "next/head";
import styles from './layout.module.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={styles['project-layout']}>
            <Head>
                <title>Aviv Avidar - פרויקט מכולה</title>
                <meta name="description" content="This is a dynamically generated description." />
            </Head>
            <Header isDark={false} />
            {children}
            <Footer />
        </div>
    );
}
