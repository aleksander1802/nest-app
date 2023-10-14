import {
    Body,
    Controller,
    Delete,
    Get,
    HttpCode,
    NotFoundException,
    Param,
    Patch,
    Post,
    UseGuards,
    UsePipes,
    ValidationPipe,
} from '@nestjs/common';
import { FindNestPageDto } from './dto/find-nest-page.dto';
import { NestPageService } from './nest-page.service';
import { CreateNestPageDto } from './dto/create-nest-page.dto';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { NOT_FOUND_TOP_PAGE_ERROR } from './dto/nest-page.constants';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';

@Controller('nest-page')
export class NestPageController {
    constructor(private readonly nestPageService: NestPageService) {}

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() dto: CreateNestPageDto) {
        return this.nestPageService.create(dto);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async get(@Param('id', IdValidationPipe) id: string) {
        const page = this.nestPageService.findById(id);
        if (!page) {
            throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
        }
        return page;
    }

    @Get('byAlias/:alias')
    async getByAlias(@Param('alias') alias: string) {
        const page = this.nestPageService.findByAlias(alias);
        if (!page) {
            throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
        }
        return page;
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':id')
    async delete(@Param('id', IdValidationPipe) id: string) {
        const deletedPage = this.nestPageService.deleteById(id);
        if (!deletedPage) {
            throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
        }
    }

    @UseGuards(JwtAuthGuard)
    @Patch(':id')
    async patch(
        @Param('id', IdValidationPipe) id: string,
        @Body() dto: CreateNestPageDto,
    ) {
        const updatedPage = this.nestPageService.updateById(id, dto);
        if (!updatedPage) {
            throw new NotFoundException(NOT_FOUND_TOP_PAGE_ERROR);
        }
        return updatedPage;
    }

    @UsePipes(new ValidationPipe())
    @HttpCode(200)
    @Post('find')
    async find(@Body() { firstCategory }: FindNestPageDto) {
        return this.nestPageService.findByCategory(firstCategory);
    }
}
