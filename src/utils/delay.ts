/**
 * delay for ms
 */
export default (ms = 1000): Promise<void> =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
