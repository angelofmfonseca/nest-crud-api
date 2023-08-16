import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'Ninja A', weapon: 'sword' },
    { id: 1, name: 'Ninja B', weapon: 'stars' },
    { id: 2, name: 'Ninja C', weapon: 'sword' },
    { id: 3, name: 'Ninja D', weapon: 'nunchucks' },
  ];

  getNinjas(weapon?: 'stars' | 'sword') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getOneNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);

    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(createNinjaDto: CreateNinjaDto) {
    const newNinja = { ...createNinjaDto, id: Date.now() };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, updateNinjaDto: UpdateNinjaDto) {
    const ninja = this.getOneNinja(id);
    const updatedNinja = { ...ninja, ...updateNinjaDto };
    return updatedNinja;
  }

  deleteNinja(id: number) {
    const toBeDeletedNinja = this.getOneNinja(id);
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== id);
    return toBeDeletedNinja;
  }
}
