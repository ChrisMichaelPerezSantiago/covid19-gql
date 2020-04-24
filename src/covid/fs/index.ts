import {IRootPRMedicalAidDistribution , IPRMedicalAidDistribution} from '../interfaces/IPRMedicalAidDistribution'
import axios from 'axios';

const URL = 'https://covid19api.io/api/v1/PuertoRico';

export async function usePRMedicalAidDistribution(): Promise<IPRMedicalAidDistribution[]>{
  const {data} = await axios.get<IRootPRMedicalAidDistribution>(`${URL}/MedicalData/PRMedicalAidDistribution`);
  const doc: IPRMedicalAidDistribution[] = data.data;
  
  return doc;
};