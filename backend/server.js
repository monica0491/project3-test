const express = require("express");
import householdData from './householdData';

const app = express();

app.get("/api/household", (req, res) => {
  res.send(householdData.household);
})

app.listen(3001, () => {console.log("Server started at http://localhost:3001")});