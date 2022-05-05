const {
  db,
  models: { User, Client },
} = require("../db/index.js");

const users = [
  {
    email: "ahoover@nimec.net",
    password: "lincoln",
  },
];

const clients = [
  {
    name: "Village of Arlington Heights",
  },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  /////////////////////////////////////////////////////////////
  const [Hoov] = await Promise.all(
    users.map((user) =>
      User.create({
        email: user.email,
        password: user.password,
      })
    )
  );

  const [VillageOfArlingtonHeights] = await Promise.all(
    clients.map((client) =>
      Client.create({
        name: client.name,
      })
    )
  );
};

module.exports = syncAndSeed;
