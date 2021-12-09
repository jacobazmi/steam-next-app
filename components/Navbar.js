import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/pngaaa.com-661438.png" alt="" width={160} height={105} />
        <h1>Game List</h1>
      </div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
      <Link href="/games">
        <a>Games</a>
      </Link>
    </nav>
  );
};

export default Navbar;
