import { Component, OnInit } from '@angular/core';
import { TableModel, TableItem } from 'carbon-components-angular/table/table.module';

@Component({
  selector: 'app-stock-view',
  templateUrl: './stock-view.component.html',
  styleUrls: ['./stock-view.component.scss']
})
export class StockViewComponent implements OnInit {

  public model;

  constructor() { }

  ngOnInit() {
    this.model = new TableModel();

    this.model.data = [
      [new TableItem({data: "stock"}), new TableItem({data: "中国平安"})],
      [new TableItem({data: "stock"}), new TableItem({data: "格力电器"})]
    ];
  }

}
