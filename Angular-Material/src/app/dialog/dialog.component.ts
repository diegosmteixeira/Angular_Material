import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogModalComponent } from './dialog-modal/dialog-modal.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  public message = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // public openDialog(): void {
  //   this.dialog.open(DialogModalComponent, {
  //     data: 'Hue',
  //     enterAnimationDuration: '1000ms',
  //     exitAnimationDuration: '1000ms',
  //   })
  // }

  public openDialog(): void {
    const dialogRef = this.dialog.open(DialogModalComponent, {
      data: 'Bugiganga'
    });

    dialogRef.afterClosed().subscribe(result => {
      this.message = result != undefined ? result: '';
    })
  }
}
