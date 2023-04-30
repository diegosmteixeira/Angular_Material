import { Component, OnInit } from '@angular/core';
import { Platform } from '@angular/cdk/platform';
import * as moment from 'moment';


@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  // public startDate = new Date(2023, 9, 20);
  // public minDate = new Date(2023, 8, 20);
  // public maxDate = new Date(2023, 10, 20);

  public startDate = moment([2023, 9, 20]);
  public minDate = moment([2023, 8, 20]);
  public maxDate = moment([2023, 10, 20]);


  constructor(private platform: Platform) { }

  ngOnInit(): void {
  }

  get isTouchDevice() {
    return this.platform.ANDROID || this.platform.IOS;
  }
}
