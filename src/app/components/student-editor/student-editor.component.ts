import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';

@Component({
  selector: 'app-student-editor',
  templateUrl: './student-editor.component.html',
  styleUrls: ['./student-editor.component.css']
})
export class StudentEditorComponent implements OnInit {

  editingStudent: Student;

  constructor(private baseService: BaseServiceService) { }

  ngOnInit() {
    this.editingStudent = new Student();
  }

  addStudent() {
    this.baseService.addNewStudent(this.editingStudent);
    this.editingStudent = new Student();
  }
}
