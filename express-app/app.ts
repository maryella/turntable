import express from "express";
import bodyParser from "body-parser";
import {
  addBusiness,
  addQueuedParty,
  getBusiness,
  getQueuedParties,
} from "./db";
import { BusinessParameters } from "../types";
import cors from "cors";
import { addListener } from "process";

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

app.get("/:businessId", async (req, res) => {
  console.log("get bus");
  const { businessId } = req.params;
  console.log("business id", businessId);
  const list = await getBusiness(businessId);
  console.log("result", list);
  res.json(list);
});

app.get("/:businessId/list", async (req, res) => {
  console.log("get list");
  const { businessId } = req.params;
  console.log("business id", businessId);
  const list = await getQueuedParties(businessId);
  console.log("result", list);
  res.json(list);
});

app.post("/:businessId/list/add", async (req, res) => {
  const { businessId } = req.params;
  console.log("business add party", businessId);
  const { partyName, partySize, phone, status } = req.body;

  const addedParty = await addQueuedParty({
    partyName,
    partySize,
    phone,
    status,
    businessId,
  });
  if (addedParty) {
    res.sendStatus(200);
  } else {
    res.sendStatus(500);
  }
});

app.post("/business/add", async (req, res) => {
  const { businessName } = req.body;

  try {
    const addedBusiness = await addBusiness({ businessName });

    res.send(addedBusiness);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
