import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-collection',
  templateUrl: './recipes-collection.component.html',
  styleUrls: ['./recipes-collection.component.css']
})
export class RecipesCollectionComponent implements OnInit {

  public recipes: any[];

  constructor(
    private _router: Router,
    private _localStorageService: LocalStorageService ) {}

  ngOnInit() {
    this.recipes = this._localStorageService.getCollection();
    console.log('collection:', this.recipes);
  }
  goToRecipe(id: number){
    this._router.navigate(['/recipes/'+id]);
  }
}
