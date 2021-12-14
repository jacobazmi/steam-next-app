const { useState } = require("react");

exports.handler = async (event, context) => {
  // const [games, setGames] = useState([]);

  // fetch("localhost:8080/games")
  // .then((res) => {
  //   if (res.ok) {
  //     return res.json();
  //   }
  //   throw response;
  // })
  // .then((games) => {
  //   setGames(games);
  // })
  const games = [
    { title: "Warzone", platform: "PC" },
    { title: "Riders Republic", platform: "PC" },
  ];

  if (context.clientContext.user) {
    return {
      statusCode: 200,
      body: JSON.stringify(games),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: "Please log in" }),
  };
};
