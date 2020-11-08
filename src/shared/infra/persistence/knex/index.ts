import knex from "knex";

const db = knex({
  client: "pg",
  version: "13",
  connection: {
    host: process.env.PG_HOST,
    database: process.env.PG_DB,
    user: process.env.PG_USER,
    password: process.env.PG_PWD,
  },
});

// Create a table
db.schema
  .createTable("users", (table) => {
    table.increments("id");
    table.string("username");
  })
  .createTable("accounts", (table) => {
    table.increments("id");
    table.string("accountName");
    table.integer("userId").unsigned().references("users.id");
  })
  .then(() => knex("users").insert({ username: "Tim" }))
  // ...and using the insert id, insert into the other table.
  .then((rows) =>
    knex("accounts").insert({ accountName: "knex", userId: rows[0] })
  )
  // Query both of the rows.
  .then(() =>
    knex("users")
      .join("accounts", "users.id", "accounts.userId")
      .select("users.username as user", "accounts.accountName as account")
  )
  // map over the results
  .then((rows) =>
    rows.map((row) => {
      console.log(row);
    })
  )
  .catch((e) => {
    console.error(e);
  });
