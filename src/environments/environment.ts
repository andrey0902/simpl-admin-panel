// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  basePath: 'http://localhost:3001/',
  basePathApi: 'http://localhost:3001/api/', /*172.16.101.53*/
  WS: 'ws://localhost:3001/api/v1/cable',
  redirectPath: 'http://localhost:4201/#/auth/sign-in/',
};
