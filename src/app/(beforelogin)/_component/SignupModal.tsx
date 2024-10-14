"use client";

import style from "./signup.module.css";
import onSubmit from "../_lib/signup";
import BackButton from "@/app/(beforeLogin)/_component/BackButton";
import { useFormStatus } from "react-dom";
import { useActionState } from "react";

function showMessage(messasge: string | null | undefined) {
  if (messasge === "no_id") {
    return "아이디를 입력하세요.";
  }
  if (messasge === "no_name") {
    return "닉네임을 입력하세요.";
  }
  if (messasge === "no_password") {
    return "비밀번호를 입력하세요.";
  }
  if (messasge === "no_image") {
    return "이미지를 업로드하세요.";
  }
  if (messasge === "user_exists") {
    return "이미 사용 중인 아이디입니다.";
  }
  return "";
}

export default function SignupModal() {
  const [state, formAction] = useActionState(onSubmit, { message: null }); // onSubmit 함수를 실행하고, 그 함수의 반환값을 state에 저장. { message: null } 이 state의 초기값.
  const { pending } = useFormStatus(); // 마지막 폼 제출의 상태 정보를 제공하는 Hook
  // 어떠한 매개변수도 받지 않음
  // useFormStatus는 동일한 컴포넌트에서 렌더링한 <form>에 대한 상태 정보를 반환하지 않습니다. 라고 공식문서에 나와있는데,, 이렇게 해도 되는거 맞나? 나중에 점검 필수
  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={formAction}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  required
                  className={style.input}
                  type="file"
                  accept="image/*"
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button
                type="submit"
                className={style.actionButton}
                disabled={pending}
              >
                가입하기
              </button>
              <div className={style.error}>{showMessage(state?.message)}</div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
