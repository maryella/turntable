import {
  BusinessParameters,
  QueueQueryParamaters,
  QueuedPartyParameters,
} from "../../../types";

export async function addBusiness(data: BusinessParameters) {
  console.log("call add business");
  try {
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
      alert("Sorry, something went wrong adding the business");
    }
  } catch (e) {
    console.log("e", e);
    return e;
  }
}

export async function addQueuedParty(data: QueuedPartyParameters) {
  const { businessId } = data;
  const response = await fetch(`http://localhost:4000/${businessId}/list/add`, {
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

export async function getBusiness(params: QueueQueryParamaters) {
  const { businessId } = params;

  const response = await fetch(`http://localhost:4000/${businessId}`);

  const data = response.json();
  if (response.status === 200) {
    return data;
  }
  if (response.status !== 200) {
    alert("Error");
  }
}

export async function getQueue(params: QueueQueryParamaters) {
  const { businessId } = params;

  const response = await fetch(`http://localhost:4000/${businessId}/list`);

  const data = response.json();
  if (response.status === 200) {
    return data;
  }
  if (response.status !== 200) {
    alert("Error");
  }
}
