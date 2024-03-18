'use client';
import styles from "./page.module.css";
import Recommendation from "@/components/recommendation";
import EventOverview from "@/components/events-overview";
import Search from "@/components/search";


const Home: React.FC =() => {
  return (
    <main className={styles.main}>
      <div>
      <EventOverview/>
      <Search/>
      <Recommendation/>
      </div>
     
    </main>
  );
}

export default Home;
