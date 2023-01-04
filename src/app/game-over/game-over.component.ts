import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.scss']
})
export class GameOverComponent implements OnInit {

  constructor(private router: Router, public dialog: MatDialog, public dialogRef: MatDialogRef<any>) { }
 
  ngOnInit(): void {
  }


  restartGame() {
    this.router.navigateByUrl('')
    this.dialogRef.close();
  }
}
