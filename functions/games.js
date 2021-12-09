exports.handler = async (event, context) => {
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
