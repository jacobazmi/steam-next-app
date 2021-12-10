import Head from "next/head";
import styles from "../../styles/Games.module.css";
import Link from "next/link";
import { useEffect } from "react";

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

const Steam = ({ games }) => {
  return (
    <>
      <Head>
        <title>Game List | Games</title>
      </Head>
      <div>
        <h1>Steam Library</h1>
        {games.map((game) => (
          <Link href={"/steam/" + game.appid} key={game.appid}>
            <a className={styles.single}>
              <div>
                <p style={{ float: "left" }}>
                  <img
                    src={
                      "http://media.steampowered.com/steamcommunity/public/images/apps/" +
                      game.appid +
                      "/" +
                      game.img_icon_url +
                      ".jpg"
                    }
                  />
                </p>
                <h3>{game.name}</h3>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Steam;
