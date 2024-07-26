import { Module } from '@nestjs/common';
import { SledService } from './sled.service';
import { SledController } from './sled.controller';

@Module({
  controllers: [SledController],
  providers: [SledService],
})
export class SledModule {}
