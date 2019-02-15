import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CustomDataSource } from '../custom-data-source';
import { UsersService } from '../../shared/users.service';
import { MatDialog, MatSort } from '@angular/material';
import { takeWhile, tap } from 'rxjs/internal/operators';
import { UserModel } from '../../../shared/core/models/user.model';
import { UserDetailsComponent } from '../../user-details/user-details.component';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
  providers: [CustomDataSource, UsersService]
})
export class UsersTableComponent implements AfterViewInit {
  displayedColumns = ['name', 'email', 'registration', 'verification', 'lastVisit', 'membership', 'membershipCost'];
  pageSize = 3;
  pageSizeOptions = [3, 5, 10];
  @ViewChild(MatSort) sort: MatSort;

  componentActive = true;

  constructor(public dataSource: CustomDataSource, public dialog: MatDialog) {
  }

  ngAfterViewInit() {
    this.handleSorting();
  }

  handleSorting() {
    if (this.sort) {
      this.sort.sortChange
        .pipe(takeWhile(() => this.componentActive), tap((val) => {
          console.log('sort', val);
          this.dataSource.sort = val;
        }))
        .subscribe();
    }
  }

  onRowClicked(e) {
    console.log('click row', e);
    this.openDialog(e);
  }

  openDialog(data: UserModel): void {
    const dialogRef = this.dialog.open(UserDetailsComponent, {
      data, width: '250px'
    });

  }

}
