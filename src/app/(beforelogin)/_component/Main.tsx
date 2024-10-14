import Image from "next/image";
import styles from "./main.module.css";
import Link from "next/link";
import logo from "../../../../public/X_logo.svg";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Image src={logo} alt="logo" />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h2>이미 계정이 있으신가요?</h2>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </div>
  );
};

export default Main;
