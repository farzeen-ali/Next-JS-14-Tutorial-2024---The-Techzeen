'use client'
import Link from "next/link";
// import EventsFunctionsState from "@/components/EventsFunctionsState";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Farzeen Ali</h2>
      {/* <EventsFunctionsState /> */}
      <Link href='/mongo-add-emp'>Add Employee</Link><br />
      <Link href='/mongo-get-emp'>Get Employee</Link>
    </main>
  );
}
