import { Query , Resolver}  from '@nestjs/graphql';
import { usePRMedicalAidDistribution } from './fs/index';
import { IPRMedicalAidDistribution } from './interfaces/IPRMedicalAidDistribution';

@Resolver()
export class CovidResolver{
  prMedicalAidDistribution: Promise<IPRMedicalAidDistribution[]> = usePRMedicalAidDistribution()

  
  @Query('PRMedicalAidDistribution')
  getPRMedicalAidDistribution(): Promise<IPRMedicalAidDistribution[]>{
    const data: Promise<IPRMedicalAidDistribution[]> = this.prMedicalAidDistribution

    return data;
  }
}