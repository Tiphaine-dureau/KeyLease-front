import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ClientListModel} from "./client-list.model";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {
  public displayedColumns = ['lastName', 'firstName', 'phoneNumber', 'email', 'actions'];
  public dataSource!: MatTableDataSource<ClientListModel>;
  @Input() data?: ClientListModel[];

  constructor() {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.data);
  }

  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    if (this.dataSource) {
      this.dataSource.filter = filterValue.trim().toLowerCase();
    }
  }
}
