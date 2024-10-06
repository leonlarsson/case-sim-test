import { drizzle } from "drizzle-orm/postgres-js";
import * as schema from "./schema.ts";
import postgres from "postgres";

export const pg = postgres(process.env.DATABASE_URL as string);

export default drizzle(pg, { schema });
