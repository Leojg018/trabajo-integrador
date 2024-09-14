import { Component } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonBackButton, IonButtons, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [IonLabel, IonButtons, IonBackButton, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PerfilPage {

 
  nombre: string = 'Leon';
  apellido: string = 'Gomez';
  email: string = 'usuario@email.com';
  imagenurl: string = 'assets/img/imgusuario.jpg';
  
  constructor(private locationStrategy: LocationStrategy) { }

  atras() {
    this.locationStrategy.back();
  }

}

