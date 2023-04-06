export const minBy = <T>(array: T[], cb: Function): T | undefined => {
  if (array.length) {
    return array.reduce((acc, val) => {
      return cb(acc) > cb(val) ? val : acc;
    })
  }
  return undefined
};

export function maxBy<T>(array: T[], cb: Function): T | undefined {
  if (array.length) {
    return array.reduce((acc, val) => {
      return cb(acc) < cb(val) ? val : acc;
    })
  }
  return undefined
};
