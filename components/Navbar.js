import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const { user, login } = useContext(AuthContext);
  console.log(user);

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

      <a onClick={login} className="loginBtn">
        Login/Signup
      </a>
    </nav>
  );
};

export default Navbar;
