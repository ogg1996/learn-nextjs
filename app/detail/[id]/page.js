import { useFecth } from "@/assets/fetch";
import Image from "next/image";
import Link from "next/link";

async function Detail({ params }) {
  const animalId = Number(params.id);
  const animal = await useFecth(animalId);
  return (
    <div
      className="
        h-[630px]
      bg-white 
        flex flex-col 
        justify-center
        items-center
        p-[20px]
        rounded-[0_0_10px_10px]"
    >
      <div className="text-[40px] pb-[20px]">- API 데이터 -</div>
      <img src={animal?.img.src} alt={animal?.name} />
      <div className="text-[30px]">{animal.name}</div>
      <div className="text-[20px] pb-[20px] text-center">
        {animal.description}
      </div>
      <Link href="/">👉 홈으로 돌아가기 👈</Link>
    </div>
  );
}

export default Detail;
