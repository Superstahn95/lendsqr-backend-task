import type { Knex } from "knex";

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "demo_credit",
      user: "root",
      password: "",
    },
    migrations: {
      directory: "./migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_DATABASE_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    },
    migrations: {
      directory: "./migrations",
    },
  },
};

export default config;
