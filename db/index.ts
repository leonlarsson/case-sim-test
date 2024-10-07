import Database from "better-sqlite3";
import * as schema from "./schema.ts";
import { drizzle } from "drizzle-orm/better-sqlite3";
import path from "path";

console.log(path.resolve("/sqlite/sqlite.db"));

export const sqlite = new Database(path.resolve("/sqlite/sqlite.db"));

export default drizzle(sqlite, { schema });
