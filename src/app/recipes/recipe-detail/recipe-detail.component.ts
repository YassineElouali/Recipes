import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe!: Recipe;
  id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute) {
  }
  ngOnInit() {
    // const id = this.route.snapshot.params['id']; this is not working in our case bcz we want to work with observables.

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];// + here refers to parseInt
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }

  onAddtoShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

}
