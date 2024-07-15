import { uuid, pgTableCreator, text, integer } from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

// Helper function to create table names with a prefix
export const createTable = pgTableCreator((name) => `tds_${name}`);

// Photos table definition
export const reservations = createTable("reservations", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  surname: text("surname").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  riders: integer("riders").notNull(),
});

export const rentals = createTable("rentals", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  surname: text("surname").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  bike: text("bike").notNull(),
  days: integer("days").notNull(),
});

export const mailList = createTable("mailList", {
  id: uuid("id")
    .primaryKey()
    .default(sql`gen_random_uuid()`),
  email: text("email").notNull(),
});
