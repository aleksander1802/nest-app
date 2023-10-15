/* eslint-disable @typescript-eslint/no-unsafe-declaration-merging */
import { index, prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products,
}

export class HhData {
    @prop()
    count: number;

    @prop()
    juniorSalary: number;

    @prop()
    middleSalary: number;

    @prop()
    seniorSalary: number;
}

export class NestPageAdvantage {
    @prop()
    title: string;

    @prop()
    description: string;
}

export interface NestPageModel extends Base {}

@index({ '$**': 'text' })
export class NestPageModel extends TimeStamps {
    @prop({ enum: TopLevelCategory })
    firstCategory: TopLevelCategory;

    @prop()
    secondCategory: string;

    @prop({ unique: true })
    alias: string;

    @prop({ text: true })
    title: string;

    @prop()
    category: string;

    @prop({ type: () => HhData })
    hh?: HhData;

    @prop({ type: () => [NestPageAdvantage] })
    advantages: NestPageAdvantage[];

    @prop()
    seoText: string;

    @prop()
    tagsTitle: string;

    @prop({ type: () => [String] })
    tags: string[];
}
