import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableStudentsComponent } from './components/table-students/table-students.component';
import { ApiComponent } from './components/api/api.component';

const routes: Routes = [
  { path: '', component: TableStudentsComponent },
  { path: 'api', component: ApiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
