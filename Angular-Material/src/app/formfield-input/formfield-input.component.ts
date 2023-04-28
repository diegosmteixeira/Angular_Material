import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formfield-input',
  templateUrl: './formfield-input.component.html',
  styleUrls: ['./formfield-input.component.scss']
})
export class FormfieldInputComponent implements OnInit {
  public value = ''

  constructor() { }

  ngOnInit(): void {
  }

}
