import { Recipe } from "../../models/recipe";


export class RecipesService{

    allRecipes:Recipe[] =  
    [new Recipe("עוגת שוקולד" , 100 , "עוגה מדהימהההה" ,
     "assets/images/cake2.jpg"),
     new Recipe("עוגת שוקולד 2" , 200 , "עוגה מדהימהההה" ,
     "assets/images/cake3.jpg"),
     new Recipe("עוגיות" , 250 , "עוגה מדהימהההה" ,
     "assets/images/cookies4.jpg"),
     new Recipe("עוגיות 2" , 130 , "עוגה מדהימהההה" ,
     "assets/images/dessert1.jpg"),
     new Recipe("קינוחים" , 280 , "עוגה מדהימהההה" ,
     "assets/images/dessert2.jpg"),
     new Recipe("עוגת מספרים" , 175 , "עוגה מדהימהההה" ,
     "assets/images/numbers6.jpg")    
    ]

    getRecipes(){
        return this.allRecipes.slice();
    }
    getRecipe(id:number){
       return this.allRecipes[id];
    }
}