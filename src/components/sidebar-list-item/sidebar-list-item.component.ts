import {Component, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar-list-item',
  templateUrl: './sidebar-list-item.html',
  styleUrls: ['./sidebar-list-item.less'],
})
export class SidebarListItemComponent {
  @Input() planet: { name: string, id: string };
  @Input() selectedPlanetId: string;

  @Output('selectedPlanetChange') selectedPlanetChanged = new EventEmitter<string>();

  selectedPlanetChange(value: string) {
    this.selectedPlanetChanged.emit(value);
  }
}
