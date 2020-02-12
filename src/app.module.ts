import { Module } from '@nestjs/common';
import {GraphQLModule} from '@nestjs/graphql';
import { AnimesModule } from './animes/animes.module';


@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions:{
        requireResolversForResolveType: false
      },
      playground: true,
      introspection: true,
    }),
    AnimesModule,
  ],
})
export class AppModule {}
