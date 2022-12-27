const fs = require("fs");
const explorersFS = JSON.parse(fs.readFileSync("explorers.json"));
const Reader = require("../../lib/utils/Reader");

describe("Test only Reader", () => {
  test("Case 1 Explorers", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    expect(explorers).toStrictEqual(explorersFS);
  });
});
