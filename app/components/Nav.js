import Link from "next/link";

async function Nav() {
  const baseUrl = "http://localhost:3000/api/animal";
  const res = await fetch(baseUrl);
  const animals = await res.json();
  return (
    <nav
      className="
      flex gap-[20px]
      flex-wrap justify-around
    bg-[#04042e]
    text-white text-[20px] 
      p-[10px_20px] 
      rounded-[10px_10px_0_0]"
    >
      <Link href="/">홈</Link>
      {animals.map((el) => (
        <Link key={el.id} href={`/detail/${el.id}`}>
          {el.name}
        </Link>
      ))}
    </nav>
  );
}

export default Nav;
