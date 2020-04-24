import { Query , Resolver}  from '@nestjs/graphql';
import { usePRMedicalAidDistribution ,usePRDataByTowns } from './fs/index';
import { IPRMedicalAidDistribution } from './interfaces/IPRMedicalAidDistribution';
import { DataPRDataByTowns , TablePRDataByTowns } from './interfaces/IPRDataByTowns';

@Resolver()
export class CovidResolver{
  prMedicalAidDistribution: Promise<IPRMedicalAidDistribution[]> = usePRMedicalAidDistribution()
  
  prDataByTowns: Promise<DataPRDataByTowns[]> = usePRDataByTowns()


  
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
}