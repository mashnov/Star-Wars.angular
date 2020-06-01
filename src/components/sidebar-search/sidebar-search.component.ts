import {Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-search',
  templateUrl: './sidebar-search.html',
  styleUrls: ['./sidebar-search.less'],
})
export class SidebarSearchComponent {
  @Input() filterValue: string;

  @Output('filterValueChange') filterValueChanged = new EventEmitter<string>();

  filterPlaceholder = 'Поиск планеты';

  filterValueChange(value: string) {
    this.filterValueChanged.emit(value);
  }
}
