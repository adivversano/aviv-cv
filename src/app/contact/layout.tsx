'use client'
import Header from "@/components/Header";
import styles from './layout.module.scss';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <div className={styles['contact-layout']}>
            <Header isDark={false} />
            {children}
        </div>
    );
}
