import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SledService } from './sled.service';
import { CreateSledDto } from './dto/create-sled.dto';
import { UpdateSledDto } from './dto/update-sled.dto';

@Controller('sled')
export class SledController {
  constructor(private readonly sledService: SledService) {}

  @Post()
  create(@Body() createSledDto: CreateSledDto) {
    return this.sledService.create(createSledDto);
  }

  @Get()
  findAll() {
    return this.sledService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sledService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSledDto: UpdateSledDto) {
    return this.sledService.update(+id, updateSledDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sledService.remove(+id);
  }
}
