import {Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.html',
  styleUrls: ['./sidebar-list.less'],
})
export class SidebarListComponent {
  @Input() planetList: [];
  @Input() selectedPlanetId: string;

  @Output('selectedPlanetChange') selectedPlanetChanged = new EventEmitter<string>();

  selectedPlanetChange(value: string) {
    this.selectedPlanetChanged.emit(value);
  }
}
