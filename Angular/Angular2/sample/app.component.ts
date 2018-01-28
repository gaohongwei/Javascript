===========  app/app.component.ts ===========
import { Component } from '@angular/core';
import {Routes, ROUTER_DIRECTIVES} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ExperimentsComponent} from './experiments/experiments.component';
import {HomeComponent} from './home/home.component';
import {StateService} from './common/state.service';
import {ExperimentsService} from './common/experiments.service';
@Component({
  selector: 'my-app',
  template: '<h1>My First Angular 2 App</h1>'
  template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name" placeholder="name">
    </div>
    `,
  templateUrl: "./app.html",
  templateUrl: require('app/app.component.html'),
  styleUrls: [require('app/app.component.css')],
  directives: [ROUTER_DIRECTIVES],
  providers: [StateService, ExperimentsService],
})
@Routes([
  {path: '/',            component: HomeComponent },
  {path: '/home',        component: HomeComponent},
  {path: '/about',       component: AboutComponent },
  {path: '/experiments', component: ExperimentsComponent },
  {path: '/*',           component: HomeComponent }
])



export class AppComponent { }
export class AppComponent {
  title = 'Tour of Heroes';
  hero = 'Windstorm';
}
export class Hero {
  id: number;
  name: string;
}
export class AppComponent {
  title = 'Tour of Heroes';
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
}


A component controls a view. 
Every Angular app has at least one root component, conventionally named AppComponent,

A HeroListComponent, for example, 
It might have a heroes property that 
returns an array of heroes that it acquired from a service. 

It might have a selectHero() method that sets a selectedHero property 
when the user clicks to choose a hero from that list. 

app/hero-list.component.ts (class)
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private service: HeroService) { }

  ngOnInit() {
    this.heroes = this.service.getHeroes();
  }

  selectHero(hero: Hero) { this.selectedHero = hero; }
}

Angular creates, updates, and destroys components as the user moves through the application. 
The developer can take action at each moment in this lifecycle through optional lifecycle hooks, 
like ngOnInit() declared above.

