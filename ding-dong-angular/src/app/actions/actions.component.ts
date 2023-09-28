import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';


export interface  Action {
  description: string;
}
@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.css']
})
export class ActionsComponent {
  selectedValue: string;
  actions: Action[] = [
    { description: 'Reproducir Musica'},
    { description: 'Realizar llamada'},
    { description: 'Enviar Mensaje'},
  ];

  sortedData: Action[];
  constructor() {
    this.sortedData = this.actions.slice();
    this.selectedValue = '';
  }
  sortData(sort: Sort) {
    const data = this.actions.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
  }
}