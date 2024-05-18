import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://www.allrecipes.com/thmb/Pn6CJYfILCBbnJgkkPfLWh-Aga0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-38-34bd7f71161446bfb69609fa46a301e4.jpg'),
    ];
}
