import { Module } from '@nestjs/common';
import { SitemapController } from './sitemap.controller';
import { NestPageModule } from 'src/nest-page/nest-page.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    controllers: [SitemapController],
    imports: [NestPageModule, ConfigModule],
})
export class SitemapModule {}
