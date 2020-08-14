import { HeroeComponent } from './../heroe/heroe.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';
import { HeroesComponent } from '../../components/heroes/heroes.component';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {
  heroes:any[]=[];
  termino:string;
  heroe:HeroeComponent;
  constructor( private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(params=>{
      this.termino= params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);
    })
  }

}
