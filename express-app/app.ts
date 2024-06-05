import express from "express";
import bodyParser from "body-parser";
import { addBusiness, addQueuedParty, getQueuedParties } from "./db";
import { BusinessParameters } from "../types";
import cors from "cors";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var corsOptions = {
  origin: 3000,
  credentials: true,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:businessId/list", async (req, res) => {
  const { businessId } = req.params;
  const result = await getQueuedParties(businessId);
  res.json(result);
});

app.post("/:businessId/add", async (req, res) => {
  const { businessId } = req.params;
  console.log("business", businessId);
  const { partyName, partySize, phone, status } = req.body;

  const addedParty = await addQueuedParty({
    partyName,
    partySize,
    phone,
    status,
    businessId,
  });
  if (addedParty) {
    console.log("added party");
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.post("/business/add", async (req, res) => {
  const { businessName } = req.body;

  const addedBusiness = await addBusiness({ businessName });
  console.log("added busin return", addedBusiness);
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
