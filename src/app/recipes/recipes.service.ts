import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from "./recipe.model";
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('a Test Recipe 1',
      'This is kind of a test maybe',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('chicken', 1),
        new Ingredient('meat', 2)

      ]
    ),
    new Recipe('a Test Recipe 2',
      'This is kind of a test maybe',
      'https://www.acouplecooks.com/wp-content/uploads/2021/03/Cheese-Tortellini-011.jpg',
      [
        new Ingredient('chicken', 2),
        new Ingredient('Apples', 10)

      ]
    ),
    new Recipe('a Test Recipe 3',
      'This is kind of a test maybe',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg',
      [
        new Ingredient('chicken', 3),
        new Ingredient('Avocado', 8)

      ]
    )

  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getReicpes() {
    return this.recipes.slice();
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
