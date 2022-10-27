import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  public getDummyDataHero() : Hero[] { 
    let superHero = new Hero();

    superHero.id = 1;
    superHero.firstName = "Clark";
    superHero.lastName = "Kent";
    superHero.name = "SuperMan";
    superHero.place = "Metropolis"

    return [superHero];
  }
}
