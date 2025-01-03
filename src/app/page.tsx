import Hero from "@/components/Hero";
import Header from "@/components/Header";
import styles from './page.module.scss';
import Summary from "@/components/Summary";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function Home() {
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
