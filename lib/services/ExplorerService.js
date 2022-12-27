class ExplorerService {
  static filterByMission(explorers, mision) {
    return explorers.filter((explorer) => explorer.mission === mision);
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    return { amount: this.filterByMission(explorers, mission).length, mission };
  }

  static getExplorersUsernamesByMission(explorer, mision) {
    return this.filterByMission(explorer, mision).map(
      (explorer) => explorer.githubUsername
    );
  }
}

module.exports = ExplorerService;
