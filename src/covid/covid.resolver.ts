import { Query , Resolver}  from '@nestjs/graphql';
import { 
  usePRMedicalAidDistribution,
  usePRDataByTowns,
  useHospitalDataAndNeeds 
} from './fs/index';
import { IPRMedicalAidDistribution } from './interfaces/IPRMedicalAidDistribution';
import { DataPRDataByTowns , TablePRDataByTowns } from './interfaces/IPRDataByTowns';
import { DataPRHospitalDataAndNeeds } from './interfaces/IPRHospitalDataAndNeeds';

@Resolver()
export class CovidResolver{
  prMedicalAidDistribution: Promise<IPRMedicalAidDistribution[]> = usePRMedicalAidDistribution()
  
  prDataByTowns: Promise<DataPRDataByTowns[]> = usePRDataByTowns()

  prHospitalDataAndNeeds: Promise<DataPRHospitalDataAndNeeds[]> = useHospitalDataAndNeeds()


  
  @Query('PRMedicalAidDistribution')
  getPRMedicalAidDistribution(): Promise<IPRMedicalAidDistribution[]>{
    const data: Promise<IPRMedicalAidDistribution[]> = this.prMedicalAidDistribution

    return data;
  }

  @Query('PRDataByTowns')
  getPRDataByTowns(): Promise<DataPRDataByTowns[]>{
    const data: Promise<DataPRDataByTowns[]> = this.prDataByTowns

    return data;
  }

  @Query('PRHospitalDataAndNeeds')
  geyPRHospitalDataAndNeedstaByTowns(): Promise<DataPRHospitalDataAndNeeds[]>{
    const data: Promise<DataPRHospitalDataAndNeeds[]> = this.prHospitalDataAndNeeds

    return data;
  }
}