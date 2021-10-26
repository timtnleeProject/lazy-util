interface PromiseLike<T> extends Promise<T> {
  // cancel the promise
  cancel: () => void;
}
/**
 * make promise cancellable
 */
export default <T>(promise: Promise<T>): PromiseLike<T> => {
  let canceled = false;

  const proxyPromise = (p: Promise<T>): PromiseLike<T> => <PromiseLike<T>>new Proxy(p, {
      get: (target, name: keyof PromiseLike<T>) => {
        if (name === "cancel")
          return () => {
            canceled = true;
          };

        if (typeof target[name] === "function") {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return (cb: any) => {
            return proxyPromise(
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              (<any>target[name])((value: any) => {
                if (canceled) {
                  // TODO remove console
                  console.log(`callback "${name as string}" canceled`);
                  return;
                }
                return cb(value);
              }),
            );
          };
        }

        return target[name];
      },
    });
  return proxyPromise(promise);
};
