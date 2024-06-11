/* eslint-disable no-undef */
import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  movie_db: process.env.DB_URL,
  node_dev:process.env.NODE_DEV
};
