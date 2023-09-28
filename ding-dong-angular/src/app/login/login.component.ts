import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {} // Inyecta el Router en el constructor

  continueWithGoogle() {
    // Aquí puedes agregar lógica relacionada con Google si es necesario
    // Luego, navega a MainComponent cuando se hace clic en el botón
    this.router.navigate(['/DingDongAlarm']);
  }
}