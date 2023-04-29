import { Component, OnInit } from '@angular/core';
import { concat, interval } from 'rxjs';
import { map, take, takeWhile, tap } from 'rxjs/operators';
import { ProgressBarMode } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.scss']
})
export class ProgressSpinnerComponent implements OnInit {
  public loading = 0
  public queryMode: ProgressBarMode = 'query';
  public queryValue = 0;
  public buffer = 0;

  constructor() { }

  ngOnInit(): void {
    this.loadingProgress(700, 100)
        .subscribe(i => this.loading = i);

    this.loadingProgress(450, 100)
        .subscribe(i => this.buffer = i);

    concat(
      interval(3000)
      .pipe(
        take(1),
        tap(_ => (this.queryMode = 'determinate'))
      ),
      this.loadingProgress(700, 100)
    ).subscribe(i => this.queryValue = i)
  }

  loadingProgress(speed: number, takeUntil: number) {
    return interval().pipe(
      // map(i => i * 5),
      // takeWhile(i => i <= 100)
      takeWhile(i => i <= takeUntil)
    )
  }
}
