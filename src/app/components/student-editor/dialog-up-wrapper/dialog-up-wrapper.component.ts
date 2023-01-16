import { Component, Inject, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-up-wrapper',
  templateUrl: './dialog-up-wrapper.component.html',
  styleUrls: ['./dialog-up-wrapper.component.css']
})
export class DialogUpWrapperComponent implements OnInit {

  editingStudent: Student;

  constructor(public dialogRef: MatDialogRef<DialogUpWrapperComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Student) { }

  ngOnInit() {
    this.editingStudent = new Student();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
