import Head from "next/head";
import styles from "../../styles/Games.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=55032FEFD6D2DA1E7F7DD382FAC00AE8&steamid=76561198082129310&include_appinfo=true&format=json"
  );
  const data = await res.json();
  const games = data.response.games;

  return {
    props: { games: games },
  };
};

const Games = ({ games }) => {
  return (
    <>
      <Head>
        <title>Game List | Games</title>
      </Head>
      <div>
        <h1>All Games</h1>
        {games.map((game) => (
          <Link href={"/games/" + game.appid} key={game.appid}>
            <a className={styles.single}>
              <h3>{game.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Games;
