import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './dto/createCat.dto';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatService) {}
  @Get()
  async findAll() {
    return await this.catService.findAll();
  }

  @Post()
  async createCat(@Body() dto: CreateCatDto) {
    return await this.catService.create(dto);
  }
}
