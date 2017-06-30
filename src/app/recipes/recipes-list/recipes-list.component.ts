import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'Test', 'https://www.eatingthaifood.com/wp-content/uploads/2014/01/thai-chicken-basil-recipe.jpg')
    , new Recipe('A Test Recipe', 'Test', 'https://www.eatingthaifood.com/wp-content/uploads/2014/01/thai-chicken-basil-recipe.jpg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
