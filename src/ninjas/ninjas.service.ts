import { Injectable } from '@nestjs/common';

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
}
