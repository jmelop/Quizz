import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public saveCategory(): void {
    Swal.fire({
      title: "New category!",
      text: "Category:",
      input: 'text',
      showCancelButton: true
    }).then((result) => {
      if (result.value) { }
    });
  }

  public saveLanguage(): void {
    Swal.fire({
      title: "New language!",
      text: "Language:",
      input: 'text',
      showCancelButton: true
    }).then((result) => {
      if (result.value) { }
    });
  }

}
