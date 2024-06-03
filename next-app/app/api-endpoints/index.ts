import { BusinessParameters } from "../../../types";

export async function addBusiness(data: BusinessParameters) {
  console.log("call add business");
  const response = await fetch("http://localhost:4000/business/add", {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const reply = await response;
  if (reply.status === 200) {
  }
  if (reply.status !== 200) {
    alert("Error");
  }
}
