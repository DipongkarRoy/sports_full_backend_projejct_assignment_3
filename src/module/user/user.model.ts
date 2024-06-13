import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcryptjs from 'bcryptjs';
import config from '../../app/config';

const UserSchcema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    required: true,
  },
  address: {
    type: String,
  },
});

UserSchcema.pre('save', async function (next) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this;
  user.password = await bcryptjs.hash(
    user.password as string,
    Number(config.berypt_salt),
  );
  next();
});
UserSchcema.post('save', function (doc, next) {
  doc.password = ' ';
  next();
});

export const UserModel = model<TUser>('User', UserSchcema);
