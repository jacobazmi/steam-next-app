import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  const { user, login, logout, authReady } = useContext(AuthContext);
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
      <Link href="/collection">
        <a>Collection</a>
      </Link>
      <Link href="/steam">
        <a>Steam</a>
      </Link>
      {authReady && (
        <>
          {!user && (
            <a onClick={login} className={styles.loginBtn}>
              Log in / Sign up
            </a>
          )}
          {user && <a>{user.user_metadata.full_name}</a>}
          {user && (
            <a onClick={logout} className={styles.loginBtn}>
              Log out
            </a>
          )}
        </>
      )}
    </nav>
  );
};

export default Navbar;
