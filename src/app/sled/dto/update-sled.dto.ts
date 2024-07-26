import { PartialType } from '@nestjs/mapped-types';
import { CreateSledDto } from './create-sled.dto';

export class UpdateSledDto extends PartialType(CreateSledDto) {}
