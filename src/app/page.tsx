'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import { useAppStore } from "@/store/store";
import { useEffect } from "react";
import styles from './page.module.scss';

export default function Home() {
  const isDark = useAppStore(state => state.header.isDark);
  const setIsDark = useAppStore(state => state.setIsDark);

  useEffect(() => {
    if (isDark) return;

    setIsDark(true);
  }, [])

  return (
    <div className={styles.home}>
      <Header />
      <Hero />
      <Summary />
      <Projects />
      <Footer />
    </div>
  );
}
