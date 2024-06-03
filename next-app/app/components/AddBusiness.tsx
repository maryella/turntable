"use client";

import { useState } from "react";
import { addBusiness } from "../api-endpoints";

export function AddBusiness() {
  const [businessName, setBusinessName] = useState("");

  function handleSubmit() {
    console.log("subimit");
    addBusiness({ businessName });
  }

  return (
    <div>
      <label>
        Name:
        <input
          name="business-name"
          onChange={(e) => setBusinessName(e.target.value)}
        />
      </label>
      <button type="button" onClick={() => handleSubmit()}>
        Save
      </button>
    </div>
  );
}
