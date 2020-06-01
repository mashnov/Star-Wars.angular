import {Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.less'],
})
export class SidebarComponent {
  @Input() filterValue: string;
  @Input() planetList: [];
  @Input() selectedPlanetId: string;
  @Input() isVisible: boolean;

  @Output('filterValueChange') filterValueChanged = new EventEmitter<string>();
  @Output('selectedPlanetChange') selectedPlanetChanged = new EventEmitter<string>();

  selectedPlanetChange(value: string) {
    this.selectedPlanetChanged.emit(value);
  }
  filterValueChange(value: string) {
    this.filterValueChanged.emit(value);
  }
}
