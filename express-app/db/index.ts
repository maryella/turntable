import pg from "pg";

const { Pool } = pg;

const pool = new Pool({
  user: "maryella",
  host: "localhost",
  port: 5432,
  database: "turntable",
});

interface BusinessInput {
  businessName: string;
}

export const query = (text, params, callback) => {
  return pool.query(text, params, callback);
};

export async function addBusiness(input: BusinessInput) {
  console.log("calladd business");
  const { businessName } = input;
  const { rows } = pool.query({
    text: "INSERT INTO businesses(business_name) VALUES($1)",
    values: [businessName],
  });

  return rows;
}

export async function getQueuedParties(id: string) {
  const { rows } = pool.query({
    text: "SELECT * FROM queued_parties WHERE business_id = $1",
    values: [id],
  });

  return rows;
}
