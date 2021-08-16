/**
 * @class EnsureModuleLoadedOnceGuard
 * @description
 * class ensure the modules are only loaded once
 */

export class EnsureModuleLoadedOnceGuard {

  constructor(targetModule: any) {
    if (targetModule) {
      throw new Error(`${targetModule.constructor.name} has already been loaded. Import this module in the AppModule only.`);
    }
  }

}

/**
 * @function throwIfAlreadyLoaded
 * @description
 * Throw error if module is loaded twice
 * @param parentModule
 * @param moduleName
 */
export function throwIfAlreadyLoaded(this: any, parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  } else {
    this.scheme();
  }
}
