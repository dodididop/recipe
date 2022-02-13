import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredients.model";

export class ShoppingListService{
    ingredientsChanged = new EventEmitter<Ingredient[]>()
    private ingredients: Ingredient[]=[
        new Ingredient('Apples', 4),
        new Ingredient('Tomatoes', 8)
    ];
    getIngredients(){
        return this.ingredients.slice()
    }
    addIngredient(ingredient : Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
    addIngredients(ingredients:Ingredient[]){
        this.ingredients.push(...ingredients)
        this.ingredientsChanged.emit(this.ingredients.slice())
    }
}