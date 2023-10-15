import { InjectModel } from '@m8a/nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { NestPageModel, TopLevelCategory } from './nest-page.model';
import { CreateNestPageDto } from './dto/create-nest-page.dto';

@Injectable()
export class NestPageService {
    constructor(
        @InjectModel(NestPageModel)
        private readonly nestPageModel: ModelType<NestPageModel>,
    ) {}

    async create(dto: CreateNestPageDto) {
        return this.nestPageModel.create(dto);
    }

    async findById(id: string) {
        return this.nestPageModel.findById(id).exec();
    }

    async findByAlias(alias: string) {
        return this.nestPageModel.findOne({ alias }).exec();
    }

    async findByCategory(firstCategory: TopLevelCategory) {
        return this.nestPageModel
            .aggregate()
            .match({
                firstCategory,
            })
            .group({
                _id: { secondCategory: '$secondCategory' },
                pages: { $push: { alias: '$alias', title: '$title' } },
            })
            .exec();
    }

    async findByText(text: string) {
        return this.nestPageModel
            .find({ $text: { $search: text, $caseSensitive: false } })
            .exec();
    }

    async deleteById(id: string) {
        return this.nestPageModel.findByIdAndRemove(id).exec();
    }

    async updateById(id: string, dto: CreateNestPageDto) {
        return this.nestPageModel
            .findByIdAndUpdate(id, dto, { new: true })
            .exec();
    }
}
