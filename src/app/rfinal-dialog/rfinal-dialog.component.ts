import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-rfinal-dialog',
  templateUrl: './rfinal-dialog.component.html',
  styleUrls: ['./rfinal-dialog.component.css']
})
export class RfinalDialogComponent {
  constructor(public dialogRef: MatDialogRef<RfinalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string, private router: Router) { }

  onClickNO(): void {
    this.router.navigate(['/']);
    this.dialogRef.close();
  }

}
