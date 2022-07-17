import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  mode: string;
  opened: boolean;

  constructor() { 
     this.mode = 'side';
     this.opened = true;
  }

  ngOnInit(): void {
    
  }

  sideNavOpenEvent(event: any) {

  }

  sideNavCloseEvent(event: any) {

  }

}
