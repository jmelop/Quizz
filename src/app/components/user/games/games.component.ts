import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  categories: Category[] = [];

  constructor(
    private categoryService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(categories => {
      this.categories = categories;
    })
  }

}
