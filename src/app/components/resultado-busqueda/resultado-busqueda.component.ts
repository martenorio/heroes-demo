import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HeroesService,Heroe} from '../services/heroes.service';
@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html',
  styleUrls: ['./resultado-busqueda.component.css']
})
export class ResultadoBusquedaComponent implements OnInit {
  heroes:Heroe[] = [];
  termino:string ;
  constructor(private _heroesService:HeroesService, private router:Router,private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((params) => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes(this.termino); 
    })
  }

  ngOnInit(): void {
  }
  verHeroe(idx:number){
    this.router.navigate(['/heroe',idx]);
  }
}
