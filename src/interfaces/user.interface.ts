import {Document} from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  age: number;
}
