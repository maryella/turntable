import pg from "pg";
import { QueuedPartyParameters } from "../../types";

const { Pool } = pg;

const pool = new Pool({
  user: "maryella",
  host: "localhost",
  port: 5432,
  database: "turntable",
});

pool.on("error", (err) => {
  console.error("something bad has happened!", err.stack);
});

interface BusinessInput {
  businessName: string;
}

export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

export async function addBusiness(input: BusinessInput) {
  const { businessName } = input;

  const response = await pool.query({
    text: "INSERT INTO businesses(business_name) VALUES($1) RETURNING business_id;",
    values: [businessName],
  });

  return response;
}

export async function addQueuedParty(input: QueuedPartyParameters) {
  const { businessId, partyName, partySize, phone, status } = input;

  const result = await pool.query({
    text: "INSERT INTO queued_parties(business_id, party_name, party_size, telephone, status) VALUES($1, $2, $3, $4, $5) RETURNING business_id;",
    values: [businessId, partyName, partySize, phone, status],
  });

  const { rows } = result;

  return rows;
}

export async function getBusiness(id: string) {
  const { rows } = await pool.query({
    text: "SELECT * FROM businesses WHERE business_id = $1",
    values: [id],
  });

  return rows[0];
}

export async function getQueuedParties(id: string) {
  const { rows } = await pool.query({
    text: "SELECT * FROM queued_parties WHERE business_id = $1",
    values: [id],
  });
  // console.log("rows", rows);
  return rows;
}
