import {WELCOME_MESSAGE} from '../constants/users-api.constants';
import {IUser} from '../interfaces/user.interface';
import {User} from '../models/user.model';

export class UsersService {

  public welcomeMessage() {
    return WELCOME_MESSAGE;
  }

  public findAll(): Promise<IUser[]> {
    return User.find({}).exec();
  }

  public add(user: IUser): Promise<IUser> {
    const newUser = new User(user);
    return newUser.save();
  }

  // Our new update method
  public async update(id: string, pokemon: IUser) {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      pokemon
    ).exec();

    if (!updatedUser) {
      throw new Error(`User with id '${id}' not found`);
    }

    return updatedUser;
  }

  public async delete(id: string) {
    const deletedUser = await User.findByIdAndDelete(id).exec();

    if (!deletedUser) {
      throw new Error(`User with id '${id}' not found`);
    }

    return deletedUser;
  }

}
