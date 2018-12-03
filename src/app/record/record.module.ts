import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordRoutingModule } from './record-routing.module';
import { ShowRecordComponent } from './show-record/show-record.component';
import { AddRecordComponent } from './add-record/add-record.component';
import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [ShowRecordComponent, AddRecordComponent],
  imports: [
    CommonModule,
    RecordRoutingModule,
    MatTabsModule
  ]
})
export class RecordModule { }
