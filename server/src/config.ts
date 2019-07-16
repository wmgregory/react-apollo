import * as path from 'path';

export const config: any = {
  // Database config
  database: {
    endpoint: 'http://localhost:8080',
    region: 'localhost',
  },

  // App server config
  APP_PORT: 4000,
  APP_URL: 'http://localhost',
  GQL_URL_DIR: 'graphql',

  // Local dir config
  SRC_DIR: path.join(__dirname, 'client', 'src'),
};
