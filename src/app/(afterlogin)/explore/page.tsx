import style from "./explore.module.css";
import SearchForm from "@/app/(afterLogin)/_component/SearchForm";
import TrendSectionItem from "@/app/(afterLogin)/_component/TrendSectionItem";

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.formZone}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
        <TrendSectionItem />
      </div>
    </main>
  );
}
