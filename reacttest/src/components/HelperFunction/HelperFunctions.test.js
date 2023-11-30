import { multiply, makeLowerCase } from "./HelperFunctions";

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
  expect(multiply(6, -9)).toBe(-54);
});

test("lowerCase", () => {
  expect(makeLowerCase("Jai Shree Ram")).toBe("jai shree ram");
  expect(makeLowerCase("hareKrishna")).toBe("harekrishna");
});
