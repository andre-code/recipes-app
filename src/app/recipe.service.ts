import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private _apiUrl: string = 'https://api.spoonacular.com/recipes/';
  private _apiKey: string = '9df28b8025694322bc46976a81e16cc3';

  constructor(private _http: HttpClient) { }
  public getRecipes(type: string = 'lunch', cusine:string = 'Italian', offset:string = '0'): Observable<any> {
    console.log(type, cusine);
    let params = new HttpParams()
                .set('apiKey', this._apiKey)
                .set('number', '20')
                .set('addRecipeInformation', 'true')
                .set('type', type)
                .set('cusine', cusine)
                .set('offset', offset);
    return this._http.get(this._apiUrl+'complexSearch', {params})
          .pipe(
            catchError( (err:any): any => {
              return this._http.get('./assets/recipes.json');
            })
          );
  }

  public getRecipeById(id: string): Observable<any> {
    let params = new HttpParams()
                .set('apiKey', this._apiKey);
    return this._http.get(this._apiUrl+id+'/information', {params})
          .pipe(
            catchError( err => throwError(err))
          );
  }
}
