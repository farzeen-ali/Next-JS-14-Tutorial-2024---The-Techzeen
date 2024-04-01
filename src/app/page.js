'use client'
import EventsFunctionsState from "@/components/EventsFunctionsState";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Farzeen Ali</h2>
      <EventsFunctionsState />
    </main>
  );
}
