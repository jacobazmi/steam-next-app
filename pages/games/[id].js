export const getStaticPaths = async () => {
  const res = await fetch(
    "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=55032FEFD6D2DA1E7F7DD382FAC00AE8&steamid=76561198082129310&include_appinfo=true&format=json"
  );
  const data = await res.json();
  const games = await data.response.games;

  const paths = games.map((game) => {
    return {
      params: { id: game.appid.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = Number(context.params.id);
  const res = await fetch(
    "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=55032FEFD6D2DA1E7F7DD382FAC00AE8&steamid=76561198082129310&include_appinfo=true&format=json"
  );
  const data = await res.json();
  const games = await data.response.games;
  const index = games.findIndex((x) => x.appid === id);
  const game = await games[index];

  return {
    props: { game: game },
  };
};

const Details = ({ game }) => {
  return (
    <div>
      <img
        src={
          "http://media.steampowered.com/steamcommunity/public/images/apps/" +
          game.appid +
          "/" +
          game.img_logo_url +
          ".jpg"
        }
      />
      <h1>{game.name}</h1>
      <p>{game.playtime_forever}</p>
    </div>
  );
};

export default Details;
