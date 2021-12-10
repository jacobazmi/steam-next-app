import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";
import styles from "../styles/Collection.module.css";

const Collection = () => {
  const { user, authReady, login } = useContext(AuthContext);
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        ".netlify/functions/games",
        user && {
          headers: { Authorization: "Bearer " + user.token.access_token },
        }
      )
        .then((res) => {
          if (!res.ok) {
            throw Error("You must be logged in to view this content");
          }
          return res.json();
        })
        .then((data) => {
          setGames(data);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setGames(null);
        });
    }
  }, [user, authReady]);

  return (
    <>
      <Head>
        <title>Game List | About</title>
      </Head>
      <div className={styles.guides}>
        <h1>User List</h1>
        {!authReady && <div>Loading...</div>}

        {error && (
          <div className={styles.error}>
            <p>{error}</p>
          </div>
        )}

        {games &&
          games.map((game) => (
            <div key={game.title} className={styles.card}>
              <h3>{game.title}</h3>
              <h4>Platform: {game.platform}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default Collection;
