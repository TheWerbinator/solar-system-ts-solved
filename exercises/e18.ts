// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { Asteroid } from "../data/data";

export function getGreatestDiscoveryYear(asteroids: Asteroid[]) {
  let dateMap = new Map();
  asteroids.forEach(asteroid => {
    if (Array.from(dateMap.keys()).includes(asteroid.discoveryYear)) {
      const currentValue = dateMap.get(asteroid.discoveryYear)
      dateMap.set(asteroid.discoveryYear, currentValue + 1)
    } else {
      dateMap.set(asteroid.discoveryYear, 1)
    }
  });
  console.log(dateMap.entries());

  return [...dateMap.entries()].reduce((acc, val) => {
    return val[1] > acc[1] ? val : acc;
  })[0]
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
