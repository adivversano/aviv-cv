'use client'
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import styles from './layout.module.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={styles['project-layout']}>
            <Header isDark={false} />
            {children}
            <Footer />
        </div>
    );
}
