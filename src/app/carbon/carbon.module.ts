import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'carbon-components-angular/table/table.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TableModule
  ],
  exports: [
    TableModule
  ]
})
export class CarbonModule { }
