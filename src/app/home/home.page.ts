import { Component, effect } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink, IonButtons,IonMenu,IonMenuButton } from '@ionic/angular/standalone';
import { MiServicioService } from '../mi-servicio.service';
import { Router, RouterLink, RouterModule, } from '@angular/router';
import { LocationStrategy } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle,IonMenu, IonContent,IonMenuButton, IonRouterLink,RouterLink,RouterModule],
})
export class HomePage {
  imagenurl: string = 'assets/img/fit1.jpg';
  constructor(
  private router:Router) {}
  


}
