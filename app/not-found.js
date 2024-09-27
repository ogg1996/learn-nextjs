import Link from "next/link";

function NotFound() {
  return (
    <div
      className="
      bg-white 
        flex flex-col 
        justify-center
        items-center
        h-[630px]
        p-[20px]
        rounded-[0_0_10px_10px]"
    >
      <div className="text-[40px] pb-[20px]">404 - NotFound</div>
      <div className="text-[20px] pb-[20px] text-center">
        요청하신 페이지를 찾을 수 없습니다.
      </div>
      <Link href="/">👉 홈으로 돌아가기 👈</Link>
    </div>
  );
}

export default NotFound;
