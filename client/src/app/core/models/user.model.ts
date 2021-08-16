import { BaseModel } from "./base.model";

export class User extends BaseModel {
  public _id?: string;
  public firstname: string;
  public username: string;
  public lastname: string;
  public email: string;
  public phone: string;
  public comments?: string;
  public password?: string;
}
  