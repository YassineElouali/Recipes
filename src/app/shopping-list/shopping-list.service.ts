import { EventEmitter } from '@angular/core';
import { Ingredient } from "../shared/ingredient.model";

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 25),
    new Ingredient('Tomatoes', 41),
    new Ingredient('Potatoes', 36)

  ];

  getIngredients() {
    return this.ingredients.slice();
  }
  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);// use this feature of pushing an array instead of calling a loop For and having alot of events
    this.ingredientChanged.emit(this.ingredients.slice());
  }
}
