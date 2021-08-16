/**
 * This class represents the end user reponse model
 */
export class APIResponeModel<
  T = Record<string, any> | boolean | string | null
> {
  //#region properties
  public readonly success: boolean = false;
  public readonly data: T;
  public readonly message: string = '';
  public readonly errors: string[] = [];
  //#endregion

  constructor(init: Partial<APIResponeModel<T>>) {
    Object.assign(this, init);
  }
}
