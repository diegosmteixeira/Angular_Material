import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar-menu',
  templateUrl: './toolbar-menu.component.html',
  styleUrls: ['./toolbar-menu.component.scss']
})
export class ToolbarMenuComponent implements OnInit {

  @Input() menuTitle: string = '';
  @Input() shadow: boolean = false;
  @Input() popText: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
