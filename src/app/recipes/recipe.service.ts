
import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'MB0001',
      'Iphone 12 Promax',
      'Price: $1400',
    ),
    new Recipe(
      'MB0002',
      'SamSung S21',
      'Price: $1400',
    ),
    new Recipe(
      'MB0003',
      'Redmi note 10s',
      'Price: $1400',
    ),
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes;
  }

  
 

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
  }
}
