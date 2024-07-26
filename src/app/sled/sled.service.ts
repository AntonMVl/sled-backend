import { Injectable } from '@nestjs/common';
import { CreateSledDto } from './dto/create-sled.dto';
import { UpdateSledDto } from './dto/update-sled.dto';

@Injectable()
export class SledService {
  create(createSledDto: CreateSledDto) {
    return 'This action adds a new sled';
  }

  findAll() {
    return `This action returns all sled`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sled`;
  }

  update(id: number, updateSledDto: UpdateSledDto) {
    return `This action updates a #${id} sled`;
  }

  remove(id: number) {
    return `This action removes a #${id} sled`;
  }
}
