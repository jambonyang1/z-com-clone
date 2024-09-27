export default function BeforeLoginLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      비포 로그인 레이아웃
      {children} {/*page.tsx의 화면이 나옴*/}
      {modal} {/* @modal의 화면이 나옴 */}
    </div>
  );
}

// 주소가 localhost:3000일 때, children -> page.tsx, modal -> @modal/default.tsx
// 주소가 localhost:3000/i/flow/login일 때, children -> /i/flow/login/page.tsx, modal -> @modal/i/flow/login/page.tsx
