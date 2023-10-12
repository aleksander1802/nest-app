import { Module } from '@nestjs/common';
import { NestPageController } from './nest-page.controller';

@Module({
    controllers: [NestPageController],
})
export class NestPageModule {}
