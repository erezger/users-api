/**
 * Constants
 * This is development config file for environment, it is used to declare development environment related configurations
 * Define Settings the object way(based on requirement):
 * {paramsName}:{value}
 * @note
 * This file can be replaced during build by using the `fileReplacements` array.
 * `ng build --prod --configuration=production` replaces `environment.ts` with `environment.prod.ts`.
 * The list of file replacements can be found in `angular.json`.
 */

export const environment = {
  production: true,
  env: 'prod',
  host: 'http://printer.xda.co.il:8080/api',
  // host: 'https://hagefen-dev-api.symple.co.in/api/v1'
};
