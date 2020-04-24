export interface IPRMedicalAidDistribution{
  recipient_Name: string;
  city: string;
  county: string;
  state: string;
  first_shipment: string;
  last_shipment: string;
  weight_lbs: number;
  country: string;
  facility_type: string;
  number_of_deliveries: number;
  cost: string;
};

export interface IRootPRMedicalAidDistribution{
  data: [IPRMedicalAidDistribution]
}