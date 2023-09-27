import { Component } from '@angular/core';
import { Sort, MatSortModule } from '@angular/material/sort';
interface Grupos {
  value: string;
  viewValue: string;
}

export interface Alarmas {
  tipo: string;
  nombre: string;
  acciones: string;
  horaAlarma: string;
  dias: string;
}

@Component({
  selector: 'app-alarms',
  templateUrl: './alarms.component.html',
  styleUrls: ['./alarms.component.css'],
})
export class AlarmsComponent {
  selectedValue: string;
  foods: Grupos[] = [
    { value: '0', viewValue: 'Trabajo' },
    { value: '1', viewValue: 'Casa' },
    { value: '2', viewValue: 'Medicamentos' },
    { value: '3', viewValue: 'Pasatiempos' },
  ];
  desserts: Alarmas[] = [
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
    { tipo: 'Casa', nombre: "159", acciones: "", horaAlarma:"",dias: "24"},
  ];

  sortedData: Alarmas[];
  constructor() {
    this.sortedData = this.desserts.slice();
    this.selectedValue = 'steak-0';
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
        case 'tipo':
          return compare(a.tipo, b.tipo, isAsc);
        case 'nombre':
          return compare(a.nombre, b.nombre, isAsc);
        case 'fat':
          return compare(a.acciones, b.acciones, isAsc);
        case 'carbs':
          return compare(a.horaAlarma, b.horaAlarma, isAsc);
        case 'protein':
          return compare(a.dias, b.dias, isAsc);
        default:
          return 0;
      }
    });
  }
}
function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
