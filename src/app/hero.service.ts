import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { Observable } from "rxjs/Rx"
import { of } from 'rxjs/observable/of';
import { Http, Response } from '@angular/http';

import * as data from '../data.json';
const HEROES: Hero[] = <any> data;

//const HEROES =  getDataFromJson();

// this.http.get('../data.json')
//                     .map(res => res.json())
//                     .subscribe(val => this.HEROES = val,
//         err => console.error(err),
//         () =>  console.log(this.HEROES),  // this one echoes out what i want
//         console.log(this.HEROES)); // but this one doesnt, so i cant return it 

@Injectable()
export class HeroService {

  constructor() { }

  
  getHeroes(): Hero[] {
    return HEROES;
  }

  getHero(id: number): Observable<Hero> {
    return of(HEROES.find(hero => hero.heroId === id));
  }
}
