"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
const db = new pg_1.Pool({
    user: "postgres.wbzidhqktwuebuogwzpe",
    host: "aws-0-ap-southeast-1.pooler.supabase.com",
    database: "postgres",
    password: "@201421Auto",
    port: 6543,
});
exports.default = db;
