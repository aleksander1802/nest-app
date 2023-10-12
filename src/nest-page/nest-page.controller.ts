import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    Param,
    Patch,
    Post,
} from '@nestjs/common';
import { NestPageModel } from './nest-page.model';
import { FindNestPageDto } from './dto/find-nest-page.dto';

@Controller('nest-page')
export class NestPageController {
    @Post('create')
    async create(@Body() dto: Omit<NestPageModel, '_id'>) {}

    @Get(':id')
    async get(@Param('id') id: string) {}

    @Delete(':id')
    async delete(@Param('id') id: string) {}

    @Patch(':id')
    async patch(@Param('id') id: string, @Body() dto: NestPageModel) {}

    @HttpCode(200)
    @Post()
    async find(@Body() dto: FindNestPageDto) {}
}
