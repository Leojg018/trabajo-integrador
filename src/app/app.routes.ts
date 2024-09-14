import { Routes } from '@angular/router';
import { PerfilPage } from './perfil/perfil.page';



export const routes: Routes = [
  { path: 'navegar', component: PerfilPage },
 
  {
    path: '',
    redirectTo: 'reactive-login',
    pathMatch: 'full',
  },
  {
    path: 'reactive-login',
    loadComponent: () => import('./reactive-login/reactive-login.page').then( m => m.ReactiveLoginPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./perfil/perfil.page').then( m => m.PerfilPage)
  },

 {
      path: 'crear-usuario',
      loadComponent: () => import('./crear-usuario/crear-usuario.page').then( m => m.CrearUsuarioPage)
    },
    
 
];
