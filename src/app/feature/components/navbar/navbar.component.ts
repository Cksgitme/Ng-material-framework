import { Component, OnInit } from '@angular/core';
import { NavBarModel } from 'src/app/feature/models/navbar.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: NavBarModel[];
  constructor() { 
    this.links = [
      {menuName: 'Users', routerLink: 'users', icon: 'account_circle'},
      {menuName: 'Orders', routerLink: 'orders', icon: 'shopping_cart'}
    ]
  }

  ngOnInit(): void {
  }

  showInfo() {

  }

}
