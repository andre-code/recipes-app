import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StorageServiceModule } from 'ngx-webstorage-service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipesCollectionComponent } from './recipes-collection/recipes-collection.component';
import { LocalStorageService } from './local-storage.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipesCollectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    StorageServiceModule,
    RouterModule.forRoot([
      { path: 'recipes', component: RecipeListComponent},
      { path: 'recipes/:id', component: RecipeDetailComponent},
      { path: 'welcome', component: RecipeListComponent},
      { path: 'recipes-collection', component: RecipesCollectionComponent},
      { path: '', component: RecipeListComponent},
    ])
  ],
  providers: [LocalStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
