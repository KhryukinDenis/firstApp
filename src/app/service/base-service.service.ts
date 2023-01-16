import { SorPagFil } from './../models/SorPagFil';
import { Student } from 'src/app/models/student';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
  providedIn: 'root'
})
export class BaseServiceService {

  private studentsUrl = 'api/base/students';

  students = new MatTableDataSource<Student>();

  constructor(private http: HttpClient) { }

  getAllStudents(spf: SorPagFil)
  {
    return this.http.post<any>(this.studentsUrl + '/get', spf).pipe();
  }

  addNewStudent(student: Student): Observable<Student>
  {
    console.log('addNewStudent');
    return this.http.post<Student>(this.studentsUrl + '/add', student).pipe();
  }

  deleteStudent(student: Student): Observable<Student>
  {
    console.log("deleteStudent");
    return this.http.delete<Student>(this.studentsUrl + '/' + student.id).pipe();
  }

  updateStudent(student: Student): Observable<Student>
  {
    console.log("updateStudent");
    return this.http.put<Student>(this.studentsUrl, student).pipe();
  }
}

