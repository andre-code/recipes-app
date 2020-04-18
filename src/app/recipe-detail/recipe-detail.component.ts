import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipe: any;
  public instructions: string[];
  public ingredients: string[];


  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _recipeService: RecipeService,
    private _localStorageService: LocalStorageService) { }

  ngOnInit() {
    const id = this._route.snapshot.paramMap.get('id');
    this._recipeService.getRecipeById(id).subscribe( {
      next: data => {
        this.recipe = data;
        this.instructions = data.analyzedInstructions[0].steps;
        this.ingredients = data.extendedIngredients;
        console.log(data.extendedIngredients);
      },
      error: err => console.log('err:', err),
    });
  }
  onBack(): void {
    this._router.navigate(['/recipes']);
  }
  setAsFavorite(): void {
    this._localStorageService.storeOnLocalStorage(this.recipe);
  }

}
