import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NestPageModule } from './nest-page/nest-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        AuthModule,
        NestPageModule,
        ProductModule,
        ReviewModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
