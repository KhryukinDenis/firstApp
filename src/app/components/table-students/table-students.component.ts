import { SorPagFil } from './../../models/SorPagFil';
import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { BaseServiceService } from 'src/app/service/base-service.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { DialogEditWrapperComponent } from '../student-editor/dialog-edit-wrapper/dialog-edit-wrapper.component';
import { DialogUpWrapperComponent } from '../student-editor/dialog-up-wrapper/dialog-up-wrapper.component';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})

export class TableStudentsComponent implements OnInit
{
  students = new MatTableDataSource<Student>();
  constructor(private baseService: BaseServiceService,
    public dialog: MatDialog) { }

  displayedColumns = ["id", "name", "surname", "delete", "update"];
  filter: string = '';
  spf: SorPagFil = new SorPagFil();
  totalElements: number = 0;

  ngOnInit()
  {
    console.log("TableStudentsComponent");
    this.getData();
  }

  ngAfterViewInit() {
    this.getData();
  }

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  getData() {
    this.sortFilterPage();
    this.baseService.getAllStudents(this.spf)
      .subscribe(pageReq => {
        this.totalElements = pageReq.totalElements;
        this.students.data = pageReq.content;
      })
  }

  sortFilterPage()
  {
    if(this.sort.direction == 'desc') this.spf.by = 'desc'
    else this.spf.by = 'asc';
    this.spf.filter = this.filter;
    if(this.sort.active == null) this.spf.field = 'id'
    else this.spf.field = this.sort.active;
    this.spf.page = this.paginator.pageIndex;
    this.spf.size = this.paginator.pageSize;
  }

  changePage(event: PageEvent)
  {
    this.getData();
  }

  sortData(event: Sort)
  {
    this.getData();
  }

  addNewStudent()
  {
    const dialogAddingNewStudent = this.dialog.open(DialogEditWrapperComponent, {
      width: '400px',
      data: null
    });
    dialogAddingNewStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("adding new student: " + result.name);
        this.baseService.addNewStudent(result).subscribe(k=>
          this.getData());
      }
    });
  }

  deleteStudent(student: Student)
  {
    this.baseService.deleteStudent(student).subscribe(k=>
      this.getData());
  }

  updateStudent(student: Student)
  {
    const dialogUpdateStudent = this.dialog.open(DialogUpWrapperComponent, {
      width: '400px',
      data: Object.assign({}, student)
    });
    dialogUpdateStudent.afterClosed().subscribe((result: Student) => {
      if(result != null) {
        console.log("Updating student: " + result.name);
        this.baseService.updateStudent(result).subscribe(k=>
          this.getData());
      }
    });
  }
  applyFilter(event: Event)
  {
    this.filter = (event.target as HTMLInputElement).value;
    this.getData();
  }
}
