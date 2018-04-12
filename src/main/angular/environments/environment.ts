// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  backendBase: 'http://localhost:8080',
  backendApiUri: '/api/users',
  backendApiUriEnvironment: '/api/environment?sort=name&size=300',

  trainsBase: 'https://api.deutschebahn.com',
  trainsLocationsApiUri: '/freeplan/v1/location',
  trainsLocationDashboard: 'Berlin'
};


