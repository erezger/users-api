import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { TableHeaderModel } from '@app/core/models/tableHeader.model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  @Input() headers: TableHeaderModel[];
  @Input() data: any[];
  @Input() disableRowClick: boolean;
  @Input() rowActions: any;

  @Output() rowClicked = new EventEmitter<any>();
  @Output() editClicked = new EventEmitter<any>();
  @Output() viewClicked = new EventEmitter<any>();
  @Output() deleteClicked = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {

  }

}
