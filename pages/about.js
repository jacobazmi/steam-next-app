import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../stores/authContext";

const About = () => {
  const { user, authReady, login } = useContext(AuthContext);
  const [games, setGames] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (authReady) {
      fetch(
        ".netlify/functions/mario",
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
      <div>
        <h1>User List</h1>
        {!authReady && <div>Loading...</div>}

        {error && (
          <div>
            <p>{error}</p>
          </div>
        )}

        {games &&
          games.map((game) => (
            <div key={game.title}>
              <h3>{game.title}</h3>
              <h4>Written by {game.platform}</h4>
            </div>
          ))}
      </div>
    </>
  );
};

export default About;
