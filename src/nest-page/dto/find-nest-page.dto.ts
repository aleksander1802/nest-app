import { IsEnum } from 'class-validator';
import { TopLevelCategory } from '../nest-page.model';

export class FindNestPageDto {
    @IsEnum(TopLevelCategory)
    firstCategory: TopLevelCategory;
}
