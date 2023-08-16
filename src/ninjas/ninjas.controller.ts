import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}
  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string): string {
    return `Get Ninja ${id}`;
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return `Create Ninja ${createNinjaDto.name}`;
  }

  @Patch(':id')
  updateNinja(
    @Param('id') id: string,
    @Body() updateNinjaDto: UpdateNinjaDto,
  ): string {
    return `Update Ninja ${id} named ${updateNinjaDto.name}`;
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string): string {
    return `Delete Ninja ${id}`;
  }
}
