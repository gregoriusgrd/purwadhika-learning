import { Pool } from "pg";

const db = new Pool ({
    user: "postgres.wbzidhqktwuebuogwzpe",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    database: "postgres",
    password: "@201421Auto",
    port: 6543,
});

export default db