import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import { RecipesService } from '../recipes/recipesService';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
    recipes:Recipe[]
    constructor(private recipesService:RecipesService) { }
  
    ngOnInit() {
       this.recipes = this.recipesService.getRecipes(); 
    }
  
  }
