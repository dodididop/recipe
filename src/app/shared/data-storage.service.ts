import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";

@Injectable({providedIn:'root'})
export class DataStorageService{
    constructor(private http: HttpClient,private recipeService:RecipeService){}

    storeRecipes(){
        const recipes = this.recipeService.getRecipes()
        this.http.put('https://snappy-catcher-256612-default-rtdb.firebaseio.com/recipes.json',recipes).subscribe(
            res=>{console.log(res);}    
        )
    }
    fetchRecipes(){
       return this.http.get<Recipe[]>('https://snappy-catcher-256612-default-rtdb.firebaseio.com/recipes.json')
       .pipe(map(
           recipes => {
               return recipes.map(recipe => {
                  return  {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients: []
                   }
                }
               )
           }
       ))
    //    .subscribe(
    //         recipes=> {
    //             this.recipeService.setRecipes(recipes)

    //         } 
    //     )
    }
}