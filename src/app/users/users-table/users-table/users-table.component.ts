import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CustomDataSource } from '../custom-data-source';
import { UsersService } from '../../shared/users.service';
import { MatSort } from '@angular/material';
import { takeWhile, tap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  providers: [
    CustomDataSource,
    UsersService
  ]
})
export class UsersTableComponent implements AfterViewInit {
  displayedColumns = ['email', 'registration', 'verification', 'membership', 'lastVisit'];
  pageSize = 3;
  pageSizeOptions = [3, 5, 10];
  @ViewChild(MatSort) sort: MatSort;

  componentActive = true;

  constructor(public dataSource: CustomDataSource) {
  }

  ngAfterViewInit() {
    this.handleSorting();
  }

  handleSorting() {
    if (this.sort) {
      this.sort.sortChange
        .pipe(
          takeWhile(() => this.componentActive),
          tap((val) => {
            console.log('sort', val);
            this.dataSource.sort = val;
          })
        )
        .subscribe();
    }
  }

  onRowClicked(e) {
    console.log( 'click row', e);
  }

}
