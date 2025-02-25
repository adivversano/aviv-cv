'use client';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Summary from "@/components/Summary";
import { useAppStore } from "@/store/store";
import { useEffect } from "react";
import styles from './page.module.scss';
import { motion, Variants } from 'framer-motion';
import useScrollWithOffset from "src/hooks/useScrollWithOffset";

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      /* Stagger each child by 0.2s */
      staggerChildren: 0.05,
      ease: 'easeOut'
    },
  },
};


export default function Home() {
  useScrollWithOffset();
  const isDark = useAppStore(state => state.header.isDark);
  const setIsDark = useAppStore(state => state.setIsDark);

  useEffect(() => {
    if (isDark) return;

    setIsDark(true);
  });

  return (
    <motion.div
      className={styles.home}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <Header />
      <Hero />
      <Summary />
      <Projects />
      <Footer />
    </motion.div>
  );
}
