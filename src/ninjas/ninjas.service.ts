import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 0, name: 'bruno', weapon: 'katana' },
    { id: 1, name: 'mario', weapon: 'nunchuks' },
    { id: 2, name: 'sophie', weapon: 'sabre' },
    { id: 3, name: 'miguel', weapon: 'spear' },
    { id: 4, name: 'denni', weapon: 'stars' },
  ];

  getNinjas(weapon: 'katana' | 'nunchuks' | 'sabre' | 'spear' | 'stars') {
    return this.ninjas.filter((ninja) => ninja.weapon === weapon);
  }
  getoneNinja(id: number) {
    return this.ninjas.filter((ninja) => ninja.id === id)[0];
  }
  createNinja(createNinjaDto: CreateNinjaDto) {
    this.ninjas.push({ ...createNinjaDto, id: this.ninjas.length });
    return this.ninjas;
  }
  updateNinja(id: number, createNinjaDto: CreateNinjaDto) {
    const index = this.ninjas.findIndex((ninja) => ninja.id === id);
  }
  deleteNinja(id: number) {
    const index = this.ninjas.findIndex((ninja) => ninja.id === id);
    this.ninjas.splice(index, 1);
    return this.ninjas;
  }
}
