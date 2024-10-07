import Database from "better-sqlite3";
import * as schema from "./schema.ts";
import { drizzle } from "drizzle-orm/better-sqlite3";

export const sqlite = new Database("./sqlite/sqlite.db");

export default drizzle(sqlite, { schema });
