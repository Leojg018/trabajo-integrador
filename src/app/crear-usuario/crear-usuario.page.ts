import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,FormControl,FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,AlertController, IonButton, IonButtons, IonIcon, IonBackButton, IonInput } from '@ionic/angular/standalone';
import { Router, RouterLink } from '@angular/router';
import { LocationStrategy } from '@angular/common';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
  standalone: true,
  imports: [IonInput, IonBackButton, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink,ReactiveFormsModule]
})
export class CrearUsuarioPage implements OnInit {

  constructor(
    private router: Router, 
    private locationStrategy: LocationStrategy,
    private alertController: AlertController
    
  ) { }

  navergarACrearUsuario(){
    this.router.navigate(['/crear-usuario']);

  }

  ngOnInit() {
  }
  atras(){
    this.locationStrategy.back();
  }

  registerForm: FormGroup = new FormGroup({
    nombre: new FormControl('', Validators.required),
    apellido: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    contraseña: new FormControl('', [Validators.required]),
    confirmarContraseña: new FormControl('', Validators.required),
  },);



  async presentAlert (mensaje:string) {
    const alert = await this.alertController.create({

      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
  onSubmit() {
    const contraseña = this.registerForm.get('contraseña')?.value;
    const confirmarContraseña = this.registerForm.get('confirmarContraseña')?.value;
    if (contraseña === confirmarContraseña){
      this.presentAlert("Formulario válido, creando usuario...")
    } else {
      this.presentAlert("Las contraseñas no coinciden");  
    }
  }

}
