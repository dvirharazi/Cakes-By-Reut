import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './Home/Home.component';
import { DropdownDirective } from './dropdown.directive';

import { RecipesComponent } from './recipes/recipes/recipes.component';
import { DessertsShopComponent } from './shop/desserts-shop/desserts-shop.component';
import { RecipesService } from './recipes/recipes/recipesService';
import { RecipeItemComponent } from './recipes/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';


     const appRoutes:Route[] = [
         {path:'' , component:HomeComponent ,pathMatch:'full'},
         {path:'recipes' , component:RecipesComponent , children:[
             {path:':id' , component:RecipeDetailsComponent}
         ]},
         {path:'desserts-shop/:id' , component:DessertsShopComponent}
        ]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    HomeComponent,
    RecipesComponent,
    DessertsShopComponent,
    RecipeItemComponent,
    RecipeDetailsComponent,
    RecipeListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
