"use client";

import style from "./trendSectionItem.module.css";
import Link from "next/link";
import { useState } from "react";

const TrendSectionItem = () => {
  const [title, setTitle] = useState("gus");
  return (
    <Link href={`/search?q=${title}`} className={style.container}>
      <div className={style.count}>실시간트렌드</div>
      <div className={style.title}>{title}</div>
      <div className={style.count}>1,250 posts</div>
    </Link>
  );
};

export default TrendSectionItem;
