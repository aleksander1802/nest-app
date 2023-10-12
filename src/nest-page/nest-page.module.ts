import { Module } from '@nestjs/common';
import { NestPageController } from './nest-page.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { NestPageModel } from './nest-page.model';

@Module({
    controllers: [NestPageController],
    imports: [
        TypegooseModule.forFeature([
            {
                typegooseClass: NestPageModel,
                schemaOptions: {
                    collection: 'NestPage',
                },
            },
        ]),
    ],
})
export class NestPageModule {}
