import { Module } from '@nestjs/common';
import { AnimesResolver } from './animes.resolver';

@Module({
  providers: [AnimesResolver],
  exports: [AnimesResolver]
})
export class AnimesModule {}
