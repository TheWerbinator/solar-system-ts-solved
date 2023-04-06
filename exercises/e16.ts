// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler
export function find<T>(array: T[], callback: Function): T | undefined {
  for (let element of array) {
    // Only if the callback that we apply returns something truthy, does it get pushed into the new array
    if (callback(element)) {
      return element;
    }
  }
}
