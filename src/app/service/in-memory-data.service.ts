// import { Injectable } from '@angular/core';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
// import { Student } from '../models/student';

// @Injectable({
//   providedIn: 'root'
// })

// export class InMemoryDataService implements InMemoryDbService {
//   createDb() {
//     const students = [
//       {id: 0, name: 'Имя 0', surname: 'Фамилия 0'},
//       {id: 1, name: 'Имя 1', surname: 'Фамилия 1'},
//       {id: 2, name: 'Имя 2', surname: 'Фамилия 2'},
//       {id: 3, name: 'Имя 3', surname: 'Фамилия 3'},
//       {id: 4, name: 'Имя 4', surname: 'Фамилия 4'},
//       {id: 5, name: 'Имя 5', surname: 'Фамилия 5'},
//       {id: 6, name: 'Имя 6', surname: 'Фамилия 6'}
//     ];
//     return {students};
//   }

//   genId(students: Student[]): number {
//     return students.length > 0 ? Math.max(...students.map(student => student.id)) + 1 : 11;
//   }
// }

