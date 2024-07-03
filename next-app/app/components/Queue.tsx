"use client";

import { useEffect, useState } from "react";
import { addQueuedParty, getBusiness, getQueue } from "../api-endpoints";
import { Business, QueuedParty } from "../../../types";
import { lato } from "../fonts";

export function Queue() {
  const [business, setBusiness] = useState<Business | null>(null);
  const [list, setList] = useState<QueuedParty[]>([]);

  useEffect(() => {
    getQueue({ businessId: "1" }).then((response) => setList(response));
  }, []);

  useEffect(() => {
    getBusiness({ businessId: "1" }).then((response) => setBusiness(response));
  }, []);

  return (
    <div>
      <h1 className={`${lato.className} text-3xl text-center`}>
        {business?.business_name ? business.business_name : null} Waitlist
      </h1>
      <div className={`mt-2`}></div>
      {list.map((party, index: number) => (
        <WaitingParty party={party} listNum={index + 1} key={party.telephone} />
      ))}
    </div>
  );
}

function WaitingParty({
  party,
  listNum,
}: {
  party: QueuedParty;
  listNum: number;
}) {
  return (
    <div
      className={`p-2 flex flex-1 justify-between ${
        listNum % 2 === 0 ? "bg-neutral-200" : "bg-neutral-50"
      }`}
    >
      <div className="flex flex-1">
        <p>
          {listNum}. {party.party_name}
        </p>
      </div>
      <div>
        <p>{party.party_size}</p>
      </div>
    </div>
  );
}
