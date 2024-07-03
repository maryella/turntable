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

export interface QueueQueryParamaters {
  businessId: string;
}

export interface QueuedParty {
  party_name: string;
  party_size: number;
  telephone: string;
  status: QueuedStatus;
}

export interface Business {
  business_name: string;
}
