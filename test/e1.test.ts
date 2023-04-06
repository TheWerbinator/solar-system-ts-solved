import { describe, it, expect } from "vitest";
import { getPlanetNames } from "../exercises/e1";
import { data } from "../data/data";

describe("getPlanetNames", () => {
  it("Should exist", () => {
    expect(getPlanetNames).toBeInstanceOf(Function);
  });
  it("There should be 8 elements", () => {
    expect(getPlanetNames(data.planets).length).toEqual(8);
  });
  it("Should give me an array of the planet names", () => {
    expect(getPlanetNames(data.planets)).toEqual([
      "Uranus",
      "Neptune",
      "Jupiter",
      "Mars",
      "Mercure",
      "Saturne",
      "Earth",
      "Vénus",
    ]);
  });
  it("Should work with a dummy array of planets", () => {
    expect(getPlanetNames([{ name: "billy" }, { name: "planet krypton" }] as any)).toEqual([
      "billy", "planet krypton"
    ]);
  });
});
