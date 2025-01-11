import { relations, sql } from "drizzle-orm";
import {
  index,
  integer,
  pgTableCreator,
  primaryKey,
  text,
  timestamp,
  varchar,
  boolean,
  pgEnum,
  uuid,
} from "drizzle-orm/pg-core";

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
