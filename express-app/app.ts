import express from "express";
import bodyParser from "body-parser";
import { addBusiness, getQueuedParties } from "./db";
import { BusinessParameters } from "../types";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/list/:id", async (req, res) => {
  const { id } = req.params;
  const result = await getQueuedParties(id);
  res.json(result);
});

app.post("/business/add", async (req, res) => {
  const { businessName } = req.body;

  console.log("call bus add api");

  const addedBusiness = await addBusiness(businessName);

  if (addedBusiness) {
    console.log("added business");
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
