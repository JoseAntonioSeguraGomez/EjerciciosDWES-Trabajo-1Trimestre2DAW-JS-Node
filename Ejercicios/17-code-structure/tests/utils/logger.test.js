// logger.test.js
import logger from '../../src/utils/logger.js';

describe('Logger', () => {
  it('should log messages with timestamp and level', () => {
    // Mock the console.log method
    const consoleSpy = jest.spyOn(console, 'log');

    logger.info('Test Info Message');

    // Assert that the console.log method was called with the expected log message
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('[INFO]'));
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining('Test Info Message'));

    // Clean up the spy
    consoleSpy.mockRestore();
  });
});