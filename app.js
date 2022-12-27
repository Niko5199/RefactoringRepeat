const fs = require("fs");

const rawdata = fs.readFileSync("explorers.json");
const explorers = JSON.parse(rawdata);

const explorersInNode = explorers.filter(
  (explorer) => explorer.mission !== "java"
);

const userNamesInNode = explorersInNode.map(
  (explorer) => explorer.githubUsername
);

const assignFizzTrick = (explorer) => {
  if (explorer.score % 3 === 0) {
    explorer.trick = "FIZZ";
    return explorer;
  } else {
    explorer.trick = explorer.score;
    return explorer;
  }
};

const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) =>
  assignFizzTrick(explorer)
);

const assignBuzzTrick = (explorer) => {
  if (explorer.score % 5 === 0) {
    explorer.trick = "BUZZ";
    return explorer;
  } else {
    explorer.trick = explorer.score;
    return explorer;
  }
};

const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) =>
  assignBuzzTrick(explorer)
);

console.log(explorersInNodeAndBuzzTrick);

const assignFizzBuzzTrick = (explorer) => {
  if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
    explorer.trick = "FIZZBUZZ";
    return explorer;
  } else {
    explorer.trick = explorer.score;
    return explorer;
  }
};

const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) =>
  assignFizzBuzzTrick(explorer)
);
