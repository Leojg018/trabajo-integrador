import { Component, OnInit, Inject } from '@angular/core';
import { CommonModule, LocationStrategy } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonBackButton, IonInput, IonInputPasswordToggle, IonButtons, IonButton, AlertController,IonRouterLink, IonAvatar } from '@ionic/angular/standalone';
import { Router, RouterLink, } from '@angular/router'; 

@Component({
  selector: 'app-reactive-login',
  templateUrl: './reactive-login.page.html',
  styleUrls: ['./reactive-login.page.scss'],
  standalone: true,
  imports: [IonAvatar, 
    IonButton, IonButtons, IonInput, IonButtons, IonBackButton, IonContent, IonHeader, IonTitle, IonToolbar, 
    CommonModule, FormsModule, ReactiveFormsModule, IonInputPasswordToggle,RouterLink,IonRouterLink,
  ]
})
export class ReactiveLoginPage implements OnInit {

  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]), 
    password: new FormControl('', Validators.required), 
  });

  private validEmail = 'usuario@mail.com';
  private validPassword = '1234';
  imagenurl: string = 'assets/img/logo1.png';

  constructor(
    private router: Router, 
    private alertController: AlertController 
  ) {}

  ngOnInit() {
    console.log('NgOnInit');
  }

  async cartelAlerta() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Correo o contraseña incorrecta',
      buttons: ['OK']
    });

    await alert.present();
  }

  
  onSubmit() {
    console.log('onSubmit called'); 
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      console.log('Datos ingresados:', email, password); 

      
      if (email === this.validEmail && password === this.validPassword) {
        
        console.log('Iniciar sesión correctamente');
        this.router.navigate(['/home']);
      } else {
      
        console.log('Datos incorrectos, mostrando alerta');
        this.cartelAlerta();
      }
    }
}
