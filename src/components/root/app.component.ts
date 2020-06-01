import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listTransformer } from './helpers.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.less']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  filterValue = '';
  planetListIsLoading = true;
  planetList = [];
  selectedPlanetId = '';

  filteredPlanetList() {
    const { filterValue, planetList } = this;
    if (!filterValue.trim()) {
      return planetList;
    }

    return planetList.filter(planet => {
      const filter = filterValue.toLowerCase();
      const isName = planet.name.includes(filter);
      const isClimate = planet.climate.includes(filter);
      const isTerrain = planet.terrain.includes(filter);

      return isName || isClimate || isTerrain;
    });
  }
  sidebarIsVisible() {
    const { planetList } = this;
    return !!planetList.length;
  }

  filterValueChange(value: string) {
    this.filterValue = value;
  }
  selectedPlanetChange(value: string) {
    this.selectedPlanetId = value;
  }
  requestPlanetList() {
    this.planetListIsLoading = true;
    this.http
      .get('https://swapi.co/api/planets/')
      .subscribe((response: { results }) => {
        const {results} = response;
        this.planetList = listTransformer(results);
        this.planetListIsLoading = false;
      });
  }
  ngOnInit() {
    this.requestPlanetList();
  }
}
