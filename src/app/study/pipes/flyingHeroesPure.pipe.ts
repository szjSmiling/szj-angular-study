import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeroesPure',
})

export class FlyingHeroesPure implements PipeTransform {
  transform( allHeroes ) {
    return allHeroes.filter(hero => hero.canFly);
  }
}