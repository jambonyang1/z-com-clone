import Link from "next/link";
import { NextPage } from "next";

const NotFound: NextPage = () => {
  return (
    <div>
      <main>
        <h1>404 - Page Not Found</h1>
        <Link href="/">
          <a>홈으로 돌아가기</a>
        </Link>
      </main>
    </div>
  );
};

export default NotFound;
