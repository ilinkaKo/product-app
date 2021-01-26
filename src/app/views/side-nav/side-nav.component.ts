import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  public selectedItem: string = 'products';
  constructor() { }

  ngOnInit(): void {
  }

  public onSelectMenuItem(selectedItem: string):void {
    this.selectedItem = selectedItem;
  }

}
