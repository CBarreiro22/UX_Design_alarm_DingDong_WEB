import { Component } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
import { NgFor } from '@angular/common';

interface Grupos {
  value: string;
  viewValue: string;
}

export interface Dessert {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css'],
})
export class ManagementComponent {
  selectedValue: string;
  foods: Grupos[] = [
    { value: '0', viewValue: 'Trabajo' },
    { value: '1', viewValue: 'Casa' },
    { value: '2', viewValue: 'Medicamentos' },
    { value: '3', viewValue: 'Pasatiempos' },
  ];
  desserts: Dessert[] = [
    { name: 'Casa', calories: 159, fat: 6, carbs: 24, protein: 4 },
    {
      name: 'Casa',
      calories: 237,
      fat: 9,
      carbs: 37,
      protein: 4,
    },
    { name: 'Medicamentos', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Pasatiempos', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Trabajo', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];

  sortedData: Dessert[];
  constructor() {
    this.sortedData = this.desserts.slice();
    this.selectedValue = '';
  }
  sortData(sort: Sort) {
    const data = this.desserts.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'name':
          return compare(a.name, b.name, isAsc);
        case 'calories':
          return compare(a.calories, b.calories, isAsc);
        case 'fat':
          return compare(a.fat, b.fat, isAsc);
        case 'carbs':
          return compare(a.carbs, b.carbs, isAsc);
        case 'protein':
          return compare(a.protein, b.protein, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
