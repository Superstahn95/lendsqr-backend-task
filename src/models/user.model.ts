import { Knex } from "knex";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  balance: number;
  wallet_id: string;
  password: string;
}

const createUserTable = async (knex: Knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("wallet_id").notNullable().unique();
    table.string("password").notNullable();
    table.integer("balance").defaultTo(0);
    table.string("token");
    table.timestamps(true);
  });
};

export { User, createUserTable };
