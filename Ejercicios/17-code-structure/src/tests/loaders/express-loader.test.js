// express-loader.test.js
import expressLoader from '../loaders/express-loader.js';

describe('Express Loader', () => {
  it('should load express app with middleware', () => {
    const serverMock = {
      use: jest.fn(),
      listen: jest.fn(),
    };

    expressLoader(serverMock);

    expect(serverMock.use).toHaveBeenCalledTimes(4); // Number of middleware you're using
  });
});