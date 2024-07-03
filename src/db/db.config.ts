import knex from "knex";
import config from "./knexfile";

const environment = process.env.NODE_ENV || "development";

const connectDb = knex(config[environment]);

export default connectDb;

// knex migrate:make migration_name -x ts
