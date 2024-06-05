export interface BusinessParameters {
  businessName: string;
}

export type QueuedStatus = "waiting" | "seated" | "cancelled";

export interface QueuedPartyParameters {
  partyName: string;
  partySize: number;
  phone: string;
  status: QueuedStatus;
  businessId: number;
}
