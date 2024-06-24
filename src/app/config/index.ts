/* eslint-disable no-undef */
import dotenv from 'dotenv';

import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  movie_db: process.env.DB_URL,
  node_dev:process.env.NODE_DEV,
  berypt_salt:process.env.BCRYPT_SALT ,
  access_token :process.env.ACCESS_TOKEN,
  access_token_expired:process.env.ACCESS_TOKEN_EXPIRED,
  refress_token:process.env.REFRESH_TOKEN,
  refresh_token_expired:process.env.REFRESH_TOKEN_EXPIRED
};
