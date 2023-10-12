import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { NestPageModule } from './nest-page/nest-page.module';
import { ProductModule } from './product/product.module';
import { ReviewModule } from './review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { getMongoConfig } from './configs/mongo.config';

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypegooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: getMongoConfig,
        }),
        AuthModule,
        NestPageModule,
        ProductModule,
        ReviewModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
