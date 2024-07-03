import { Knex } from "knex";

interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_name: string;
  balance: number;
  walletID: string;
}

const createUserTable = async (knex: Knex) => {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("first_name").notNullable();
    table.string("last_name").notNullable();
    table.string("email").notNullable().unique();
    table.string("user_name").notNullable().unique();
    table.integer("balance").defaultTo(0);
    table.timestamps(true);
  });
};

export { User, createUserTable };
