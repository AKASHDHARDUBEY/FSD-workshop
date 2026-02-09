const { calculateFinalAmount } = require("../src/pricing");

test("example: sanity check", () => {
  expect(1 + 1).toBe(2);
});

test("Check for invalid sub total", () => {
  expect(() => calculateFinalAmount(-100, "DISCOUNT")).toThrow(
    "Invalid subtotal",
  );
});

test("check if subtotal is less than 1000", () => {
  expect(calculateFinalAmount(500)).toBe(500);
});

test("check if subtotal is 1000 or more", () => {
  expect(calculateFinalAmount(1000)).toBe(950);
});

test("check save10 coupon", () => {
  expect(calculateFinalAmount(1000, "SAVE10")).toBe(850);
});

test("check flat50 coupon", () => {
  expect(calculateFinalAmount(1000, "FLAT50")).toBe(900);
});

test("check invalid input", () => {
  expect(() => calculateFinalAmount(-100)).toThrow("Invalid subtotal");
});
