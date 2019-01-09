import { Pipe, PipeTransform } from '@angular/core';
import { FlyingHeroesPure } from './flyingHeroesPure.pipe';

@Pipe({
  name: 'flyingHeroesImpure',
  pure: false
})
export class FlyingHeroesImpurePipe extends FlyingHeroesPure {}