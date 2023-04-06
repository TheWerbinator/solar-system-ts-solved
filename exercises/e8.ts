// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters

import { Planet } from "../data/data";

export function findPlanetByMoon({ planets, moonName }: { planets: Planet[], moonName: string }) {
  const firstLetter = moonName.charAt(0).toUpperCase();
  const cutMoonName = moonName.slice(1)
  const transformedMoonName = firstLetter + cutMoonName;
  console.log(transformedMoonName);
  return planets.filter(planet => planet.moons?.includes(transformedMoonName))[0]
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
