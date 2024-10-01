"use client";

import style from "./trendSection.module.css";
import TrendSectionItem from "./TrendSectionItem";
import { usePathname } from "next/navigation";
const TrendSection = () => {
  const pathname = usePathname();
  if (pathname === "/explore") return null;
  return (
    <div className={style.trendBg}>
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
    </div>
  );
};

export default TrendSection;
