import Head from "next/head";
import { useContext, useEffect } from "react";
import AuthContext from "../stores/authContext";

const About = () => {
  const { user, authReady } = useContext(AuthContext);

  useEffect(() => {
    if (authReady) {
      fetch(
        ".netlify/functions/mario",
        user && {
          headers: { Authorization: "Bearer " + user.token.access_token },
        }
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, authReady]);

  return (
    <>
      <Head>
        <title>Game List | About</title>
      </Head>
      <div>
        <h1>User List</h1>
      </div>
    </>
  );
};

export default About;
