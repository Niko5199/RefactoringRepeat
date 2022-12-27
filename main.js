const Reader = require("./lib/utils/Reader.js");
const ExplorerServices = require("./lib/services/ExplorerService.js");
const explorers = Reader.readJsonFile("explorers.json");
const express = require("express");
const app = express();
const port = 3000;

app.get("/explorers", (_, res) => {
  res.status(200).json(explorers);
});

app.get("/explorers/:mission", (req, res) => {
  if (req.params.mission === "node" || req.params.mission === "java")
    res
      .status(200)
      .json(ExplorerServices.filterByMission(explorers, req.params.mission));
  else res.json({ error: "Not found", element: req.params.mission });
});

app.get("/explorers/amount/:mission", (req, res) => {
  if (req.params.mission === "node" || req.params.mission === "java")
    res
      .status(200)
      .json(
        ExplorerServices.getAmountOfExplorersByMission(
          explorers,
          req.params.mission
        )
      );
  else res.json({ error: "Not found", element: req.params.mission });

  console.log(req.query);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
