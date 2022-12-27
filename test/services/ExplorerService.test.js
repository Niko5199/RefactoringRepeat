const fs = require("fs");
const explorers = JSON.parse(fs.readFileSync("explorers.json"));
const ExplorerService = require("../../lib/services/ExplorerService");

describe("Tests only for class ExplorerService", () => {
  test("Test for method filterByMission", () => {
    expect(ExplorerService.filterByMission(explorers, "node")).toStrictEqual(
      explorers.filter((explorer) => explorer.mission === "node")
    );
  });

  test("Test for method getExplorersUsernamesByMission", () => {
    expect(
      ExplorerService.getExplorersUsernamesByMission(explorers, "node")
    ).toStrictEqual(
      explorers
        .filter((explorer) => explorer.mission === "node")
        .map((explorer) => explorer.githubUsername)
    );
  });
});
