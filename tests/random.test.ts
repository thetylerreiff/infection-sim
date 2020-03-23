import { random } from "../src/utils";

describe("utils.random tests", () => {
  it("should return a random value between 0 and 1", () => {
    const rand = random();
    expect(rand).toBeLessThan(1);
    expect(rand).toBeGreaterThan(0);
  });

  it("should return a random value between 0 and n", () => {
    const n = 10;
    const rand = random(n);
    expect(rand).toBeLessThan(n);
    expect(rand).toBeGreaterThan(0);
  });

  it("should return a random value between 0 and 1 when provided 1", () => {
    const n = 1;
    const rand = random(n);
    expect(rand).toBeLessThan(n);
    expect(rand).toBeGreaterThan(0);
  });
});
