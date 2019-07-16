// import { tester } from 'graphql-tester';
import { config } from './config';

describe('Handler', () => {
  let server: any;

  // beforeAll(() => {
  //   server = tester({
  //     contentType: 'application/json',
  //     url: `http://127.0.0.1:${config.APP_PORT}/${config.GQL_URL_DIR}`,
  //   });
  // });

  it('should be true', () => {
    expect(true).toBe(true);
  });
});
