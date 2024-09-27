import { useFecth } from "@/assets/fetch";
import Link from "next/link";

export default async function Home() {
  const animals = await useFecth();

  return (
    <div
      className="
      bg-white 
        flex flex-col 
        justify-center
        items-center
        p-[20px]
        rounded-[0_0_10px_10px]"
    >
      <div className="text-[40px] pb-[30px]">골라보세요</div>
      <div className="flex flex-wrap w-[215px] gap-[15px]">
        {animals.map((el) => (
          <Link
            key={el.id}
            className="
            bg-[#04042e]
            text-white
              text-[20px]
              text-center
              p-[10px]
              w-[100px]
              rounded-[25px]
              "
            href={`/detail/${el.id}`}
          >
            {el.name}
          </Link>
        ))}
      </div>
      <Link
        className="
        mt-[20px]
        w-[200px]
        h-[40px]
      bg-[#04042e]
      text-white
        text-[20px]
        text-center
        leading-[40px]
        rounded-[8px]"
        href="404_ERROR_유도"
      >
        404 - Not found
      </Link>
    </div>
  );
}
