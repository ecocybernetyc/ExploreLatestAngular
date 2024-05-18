import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent {
    recipe = {
        name: 'A Test Recipe',
        description: 'This is simply a test',
        imagePath: 'https://www.allrecipes.com/thmb/Pn6CJYfILCBbnJgkkPfLWh-Aga0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/45396-easy-pancakes-mfs-38-34bd7f71161446bfb69609fa46a301e4.jpg'
    };
}
