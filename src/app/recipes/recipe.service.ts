import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Ingredient } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipesChanged = new Subject<Recipe[]>()
    // private recipes: Recipe[]=[
    //     new Recipe(
    //         'A Test Recipe',
    //         'This is first recipe I tried.',
    //         'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
    //         [
    //             new Ingredient('Meat',1),
    //             new Ingredient('Tomatoes',2)
    //         ]),
            
    //     new Recipe('A Test Recipe',
    //         'This is first recipe I tried.',
    //         'https://www.simplyrecipes.com/thmb/mbN8mXZ0srgAT1YrDU61183t0uM=/648x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-Dough-Lead-Shot-1b-ea13798d224048b3a28afb0936c9b645.jpg',
    //         [
    //             new Ingredient('Flour',1),
    //             new Ingredient('Tomato',2)
    //         ]),
    //   ];
    private recipes : Recipe[] = []
      constructor(private shoppingListService:ShoppingListService){}
    getRecipes(){
        return this.recipes.slice();
    }
    setRecipes(recipes:Recipe[]){
        this.recipes = recipes
        this.recipesChanged.next(this.recipes.slice())
    }
    getRecipe(id:number){
        return this.recipes[id]
    }
    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.shoppingListService.addIngredients(ingredients)
    }
    addRecipe(recipe:Recipe){
        this.recipes.push(recipe)
        this.recipesChanged.next(this.recipes.slice())
    }
    updateRecipe(index: number,newRecipe:Recipe){
        this.recipes[index] = newRecipe
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1)
        this.recipesChanged.next(this.recipes.slice())
    }
}