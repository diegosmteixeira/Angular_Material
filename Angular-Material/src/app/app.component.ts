import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public smallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  // ngAfterContentInit(): void {
  //   this.breakpointObserver.observe(['(max-width: 800px)'])
  //   .subscribe({
  //     next: (res) => {
  //       if (res.matches) {
  //         this.smallScreen = true;
  //       } else {
  //         this.smallScreen = false;
  //       }
  //     }
  //   })
  // }

  ngAfterContentInit(): void {
    this.breakpointObserver.observe(['(max-width: 800px)'])
    .subscribe((res) => this.smallScreen = res.matches);
  }

  get sidenavMode() {
    return this.smallScreen ? 'over' : 'side'
  }
}
