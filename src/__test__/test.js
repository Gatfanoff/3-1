import healthStatus from "../index";

test("shold return health when health more than 50", () => {
    const character = {name: "Mage", health: 90};
    expect(healthStatus(character)).toBe("healthy")
});

test("shold return wounded when health is between 15 and 50", () => {
  const character = { name: "Mage", health: 30 };
  expect(healthStatus(character)).toBe("wounded");
});
test("shold return critical when health is less 15", () => {
  const character = { name: "Mage", health: 5 };
  expect(healthStatus(character)).toBe("critical");
});