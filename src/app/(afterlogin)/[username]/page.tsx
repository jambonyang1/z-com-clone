import style from "./profile.module.css";
import Post from "@/app/(afterlogin)/_component/Post";
import BackButton from "@/app/(afterlogin)/_component/BackButton";
import Image from "next/image";

export default function Profile() {
  const user = {
    id: "hyun",
    nickname: "gustavo fring",
    image: "/hyun.jpeg",
  };

  return (
    <main className={style.main}>
      <div className={style.header}>
        <BackButton />
        <h3 className={style.headerTitle}>{user.nickname}</h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <Image src={user.image} alt={user.id} width={134} height={134} />
        </div>
        <div className={style.userName}>
          <div>{user.nickname}</div>
          <div>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
      <div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
  );
}
