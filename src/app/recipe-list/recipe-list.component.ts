import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  public pageTitle: string = "Recipe List";
  public inProgress: boolean = true;
  public recipes: any[];
  public cusines: string[] = ['Latin American','Italian','Mexican','German'];
  public types: string[] = ['lunch','dessert','salad','sauce','soup','snack','drink'];
  public cusine = new FormControl('Italian');
  public type = new FormControl('lunch');
  public registrationForm = this._fb.group({
    type: ['lunch'],
    cusine: ['Italian'],
  })

  constructor(
    private _recipeService: RecipeService,
    private _router: Router,
    public _fb: FormBuilder) {}

  ngOnInit() {
    this._recipeService.getRecipes().subscribe( {
      next: data => {
        this.recipes = data.results;
        this.inProgress = false;
      },
      error: err => console.log('err:', err),
    });
  }
  goToRecipe(id: number){
    this._router.navigate(['/recipes/'+id]);
  }
  getRecipes() {
    this.inProgress = true;
    this._recipeService.getRecipes(this.registrationForm.get('type').value, this.registrationForm.get('cusine').value)
    .subscribe( {
      next: data => {
        this.recipes = data.results;
        this.inProgress = false;
      },
      error: err => console.log('err:', err),
    });
  }
}
