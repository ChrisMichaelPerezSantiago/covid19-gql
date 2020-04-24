import {IRootPRMedicalAidDistribution , IPRMedicalAidDistribution} from '../interfaces/IPRMedicalAidDistribution';
import {IRootPRDataByTowns , DataPRDataByTowns} from '../interfaces/IPRDataByTowns';
import {IRootPRHospitalDataAndNeeds , DataPRHospitalDataAndNeeds} from '../interfaces/IPRHospitalDataAndNeeds';

import axios from 'axios';

const URL = 'https://covid19api.io/api/v1/PuertoRico';

export async function usePRMedicalAidDistribution(): Promise<IPRMedicalAidDistribution[]>{
  const {data} = await axios.get<IRootPRMedicalAidDistribution>(`${URL}/MedicalData/PRMedicalAidDistribution`);
  const doc: IPRMedicalAidDistribution[] = data.data;
  
  return doc;
};

export async function usePRDataByTowns(){
  const {data} = await axios.get<IRootPRDataByTowns>(`${URL}/Biosecurity/PRDataByTowns`);
  const doc: DataPRDataByTowns[] = data.data

  return doc;
}

export async function useHospitalDataAndNeeds(){
  const {data} = await axios.get<IRootPRHospitalDataAndNeeds>(`${URL}/Biosecurity/HospitalDataAndNeeds`);
  const doc: DataPRHospitalDataAndNeeds[] = data.data

  return doc;
}