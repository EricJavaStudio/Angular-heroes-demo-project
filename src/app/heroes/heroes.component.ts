import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { SearchFilterPipe } from '../heroes.pipe';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

  ShowHideImage: string = 'visible';
  ButtonText: string = 'Hide Image';

  ShowHideDetails(): void {
    if (this.ShowHideImage == 'visible') {
      this.ShowHideImage = 'hidden';
      this.ButtonText = 'Show Image';
    }
    else {
      this.ShowHideImage = 'visible';
      this.ButtonText = 'Hide Image';
    }
  }
}