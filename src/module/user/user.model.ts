import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';


const UserSchcema = new Schema<TUser>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
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
    enum:['user','admin'],
    required: true,
  },
  address: {
    type: String,
  },
});

export const UserModel = model<TUser>('User', UserSchcema);
