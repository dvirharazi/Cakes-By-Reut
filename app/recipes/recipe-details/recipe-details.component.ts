import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe';
import {  ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes/recipesService';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
    recipe:Recipe;
    id:number;

  constructor(private route:ActivatedRoute , private recipeService:RecipesService,
    private router:Router) { }

  ngOnInit() {
      this.route.params.subscribe(
          (params:Params)=>{
              this.id = +params['id'],
              this.recipe = this.recipeService.getRecipe(this.id);
          }
      )
  }
  toPurchase(){
    this.router.navigate(['desserts-shop', this.id ])
  }

}
