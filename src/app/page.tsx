'use client';
import styles from "./page.module.scss";
import Recommendation from "@/components/recommendation";
import EventOverview from "@/components/events-overview";
import Search from "@/components/search";
import Categories from "@/components/categories";
import AfterHeader from "@/components/afterHeader";

const Home: React.FC =() => {
  return (
    <main className="{styles.main}">
      <div>
        <AfterHeader/>
        <Categories/>
        {/* <EventOverview/>  */}
      {/* <Search/> */}
      {/* <Recommendation/> */}
      </div>
     
    </main>
  );
}

export default Home;
