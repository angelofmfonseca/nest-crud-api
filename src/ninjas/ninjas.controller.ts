import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';
import { BeltGuard } from './belt/belt.guard';

@Controller('ninjas')
export class NinjasController {
  constructor(private readonly ninjasService: NinjasService) {}

  @Get()
  getNinjas(@Query('weapon') weapon: 'stars' | 'sword') {
    return this.ninjasService.getNinjas(weapon);
  }

  @Get(':id')
  getOneNinja(@Param('id') id: string) {
    try {
      return this.ninjasService.getOneNinja(+id);
    } catch (error) {
      throw new NotFoundException();
    }
  }

  @Post()
  @UseGuards(BeltGuard)
  createNinja(@Body(new ValidationPipe()) createNinjaDto: CreateNinjaDto) {
    return this.ninjasService.createNinja(createNinjaDto);
  }

  @Patch(':id')
  updateNinja(@Param('id') id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
    return this.ninjasService.updateNinja(+id, updateNinjaDto);
  }

  @Delete(':id')
  deleteNinja(@Param('id') id: string) {
    return this.ninjasService.deleteNinja(+id);
  }
}
