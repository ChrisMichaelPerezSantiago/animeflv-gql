import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql'
import { AnimesModule } from './animes/animes.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions:{
        requireResolversForResolveType: false
      }
    }),
    AnimesModule,
  ],
})
export class AppModule {}
