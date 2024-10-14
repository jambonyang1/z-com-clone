"use client";

import { useSession } from "next-auth/react";
import style from "./trendSection.module.css";
import TrendSectionItem from "./TrendSectionItem";
import { usePathname } from "next/navigation";
const TrendSection = () => {
  const { data: session } = useSession();
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  if (session?.user) {
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
  } else {
    return (
      <div className={style.trendBg}>
        <div className={style.noTrend}>트렌드를 가져올 수 없습니다.</div>
      </div>
    );
  }
};

export default TrendSection;
