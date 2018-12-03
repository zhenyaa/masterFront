import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRecordComponent} from './add-record/add-record.component'
import {ShowRecordComponent} from './show-record/show-record.component'
const routes: Routes = [
  {
    path: 'add', component: AddRecordComponent
  },
  {
    path: 'show', component: ShowRecordComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordRoutingModule { }
