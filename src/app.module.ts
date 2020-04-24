import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { CovidModule } from './covid/covid.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions:{
        requireResolversForResolveType: false,
      },
      installSubscriptionHandlers: true,
      playground: true,
      introspection: true,
    }),
    CovidModule,
  ],
})

export class AppModule {}