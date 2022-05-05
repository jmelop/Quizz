import { Component, Input, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Language } from 'src/app/models/language.model';
import { CategoriesService } from 'src/app/services/categories.service';
import { LanguagesService } from 'src/app/services/languages.service';
import { SharedService } from 'src/app/services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  language: Language = new Language();
  category: Category = new Category();

  constructor(
    private languagesService: LanguagesService,
    private categoryService: CategoriesService,
    private sharedService: SharedService
  ) { }

  ngOnInit(): void {
  }

  public setAlert(type: string): void {
    Swal.fire({
      title: 'New ' + type + '!',
      text: type + ":",
      input: 'text',
      showCancelButton: true,
      preConfirm: (value) => {
        if (!value) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> The ' + type + ' is required'
          )
        } else if (value.length < 2 || value.length > 12) {
          Swal.showValidationMessage(
            '<i class="fa fa-info-circle"></i> ' + type + ' size must be between 2 and 12'
          )
        }
      }
    }).then((result) => {
      if (typeof result.value === 'string') {
        this.saveItem(result.value, type);
      }
    })
  }

  saveItem(value: string, type: string) {
    if (value && type === 'category') {
      this.category.name = value;
      this.categoryService.saveCategory(this.category).subscribe(categoryStatus => {
        if (categoryStatus !== undefined) {
          Swal.fire('New category', categoryStatus.message, 'success');
          this.sharedService.changeCategory(categoryStatus.category);
        }
      }), () => {
        Swal.fire('New category', 'Error adding new category', 'error');
      };
    } else if (value && type === 'language') {
      this.language.name = value;
      this.languagesService.saveLanguage(this.language).subscribe(languageStatus => {
        if (languageStatus !== undefined) {
          Swal.fire('New language', languageStatus.message, 'success');
          this.sharedService.changeLanguage(languageStatus.language);
        }
      }), () => {
        Swal.fire('New language', 'Error adding new language', 'error');
      };
    }
  }

}
