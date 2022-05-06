const {
  db,
  models: { User, Client, Reference },
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
  { name: "Village of Montgomery" },
  { name: "Elburn" },
];

const references = [
  {
    name: "joe collins",
    title: "Public Works Director",
    quote:
      "Thanks for your work in organizing the NIMEC communities to band together. You have led us to a monumental change in how governments work for the common good, and provided a real, tangible benefit to citizens across the state.",
  },
  {
    title: "City Administrator",
    quote:
      "NIMEC is a very professional company to work with. They walked the Village through the aggregation process and met personally with the Village along the way. Their promptness, organization and detail were exemplary.",
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

  const [VillageOfArlingtonHeights, VillageOfMontgomery, Elburn] =
    await Promise.all(
      clients.map((client) =>
        Client.create({
          name: client.name,
        })
      )
    );

  const [ref1, ref2] = await Promise.all(
    references.map((reference) =>
      Reference.create({
        name: reference.name,
        title: reference.title,
        quote: reference.quote,
      })
    )
  );

  ref1.clientId = VillageOfMontgomery.id;
  ref2.clientId = Elburn.id;

  await Promise.all([ref1.save(), ref2.save()]);
};

module.exports = syncAndSeed;
