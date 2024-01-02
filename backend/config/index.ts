import path from "path";

import dotenv from "dotenv";
import { cleanEnv, num } from "envalid";

dotenv.config({
  path: path.join(
    path.dirname(__dirname),
    `.env.${process.env.NODE_ENV}.local`
  ),
});

const env = cleanEnv(process.env, {
  SERVER_PORT: num(),
});

export default env;
