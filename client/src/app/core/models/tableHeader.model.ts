import { BaseModel } from "./base.model";

export class TableHeaderModel extends BaseModel {
  public _id?: string;
  public property: string;
  public text: string;
}
  