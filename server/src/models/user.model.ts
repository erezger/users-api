import mongoose, {model} from 'mongoose';
import {IUser} from '../interfaces/user.interface';

const UserSchema = new mongoose.Schema(
  {
      firstName: {type: String, required: [true, 'Field is required']},
      lastName: {type: String, required: [true, 'Field is required']},
      gender: {type: String, required: [true, 'Field is required']},
      email: {type: String, unique: true, required: [true, 'Field is required']},
      age: {type: Number, required: [true, 'Field is required']},
  },
  {versionKey: false}
);

export const User = model<IUser>("User", UserSchema);
