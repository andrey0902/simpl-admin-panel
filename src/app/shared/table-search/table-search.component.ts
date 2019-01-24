import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, takeWhile } from 'rxjs/internal/operators';

@Component({
  selector: 'app-table-search',
  templateUrl: './table-search.component.html',
  styleUrls: ['./table-search.component.scss']
})
export class TableSearchComponent implements OnInit, OnDestroy {
  @Input() dataSource: any;
  @Input() placeholder = 'Search';

  @Output() changeSearch = new EventEmitter<string>();

  control: FormControl;
  componentActive = true;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createControl();
    this.handlerChanges();
  }

  createControl() {
    this.control = this.fb.control('');
  }

  handlerChanges() {
    this.control.valueChanges
      .pipe(
        takeWhile(() => this.componentActive),
        debounceTime(150),
        distinctUntilChanged()
      )
      .subscribe((value) => {

        const val = value ? value : '';
        this.changeSearch.emit(val);
        this.dataSource.filter = val;
      }, error => {
        console.warn(error);
        this.dataSource.filter = '';
      });
  }

  ngOnDestroy() {
    this.componentActive = false;
  }
}
