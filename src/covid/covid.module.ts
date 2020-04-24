import { Module } from '@nestjs/common';
import {CovidResolver} from './covid.resolver';

@Module({
  providers: [CovidResolver],
  exports: [CovidResolver]
})

export class CovidModule {}
