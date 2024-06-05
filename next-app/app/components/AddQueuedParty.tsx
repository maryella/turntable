"use client";

import { useState } from "react";
import { addQueuedParty } from "../api-endpoints";

export function AddQueuedParty() {
  const [partyName, setPartyName] = useState("");
  const [partySize, setPartySize] = useState<string | null>(null);
  const [phone, setPhone] = useState("");
  const [businessId, setBusinessId] = useState<string | null>(null);

  function handleSubmit() {
    console.log("subimit");
    console.log(partyName, partySize, phone, businessId);
    if (partyName && partySize && phone && businessId) {
      addQueuedParty({
        partyName,
        partySize: Number(partySize),
        phone,
        businessId: Number(businessId),
        status: "waiting",
      });
    }
  }

  return (
    <div>
      <label>
        Name:
        <input
          name="party-name"
          onChange={(e) => setPartyName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Size:
        <select
          name="party-size"
          onChange={(e) => setPartySize(e.target.value)}
        >
          {new Array(8).fill("").map((value, i) => (
            <option value={i + 1} key={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </label>
      <label>
        Telephone:
        <input
          name="phone"
          type="tel"
          onChange={(e) => setPhone(e.target.value)}
        />
      </label>
      <label>
        Business id
        <input
          name="business"
          onChange={(e) => setBusinessId(e.target.value)}
        />
      </label>
      <br />
      <button type="button" onClick={() => handleSubmit()}>
        Save
      </button>
    </div>
  );
}
