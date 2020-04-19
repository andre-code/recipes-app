import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
const STORAGE_KEY = 'local_recipes_collection_v2';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public anotherTodolist = [];
     constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }
     public storeOnLocalStorage(recipe: any): void {  
      const currentRecipeCollection = this.storage.get(STORAGE_KEY) || [];
      currentRecipeCollection.push(recipe);
      this.storage.set(STORAGE_KEY, currentRecipeCollection);
      console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
    }

    public getCollection(): any[] {
      return this.storage.get(STORAGE_KEY);
    }
    public alreadyExist(id: number): boolean {
      const recipes = [...this.storage.get(STORAGE_KEY)];
      const matchRecipe = recipes.filter( recipe => recipe.id == id);
      return matchRecipe.length > 0;
    }
}
