"use client";
import { useEffect } from "react";

const MSWComponent = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // window 객체가 존재할 때만 실행. 즉 브라우저에서만 실행
      if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
        require("@/mocks/browser");
      }
    }
  }, []);

  return null;
};

export default MSWComponent;
