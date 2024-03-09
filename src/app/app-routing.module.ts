import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//Admin
import { AdminComponent } from './theme/layout/admin/admin.component';
import { UsersComponent } from './components/for-admin/users/users.component';
import { ConsolasComponent } from './components/for-admin/consolas/consolas.component';
import { JuegosComponent } from './components/for-admin/juegos/juegos.component';
import { PromocionesComponent } from './components/for-admin/promociones/promociones.component';
import { EventosComponent } from './components/for-admin/eventos/eventos.component';
import { TorneosComponent } from './components/for-admin/torneos/torneos.component';
//NewClient
import { NewClientComponent } from './components/new-client/new-client.component';
import { PromocionComponent } from './components/new-client/promocion/promocion.component';
import { InicioComponent } from './components/new-client/inicio/inicio.component';
import { EventoComponent } from './components/new-client/evento/evento.component';
import { ConsolaComponent } from './components/new-client/consola/consola.component';
import { JuegoComponent } from './components/new-client/juego/juego.component';
//inciar sesion
import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';

const routes: Routes = [
  {
    path:'',
    component:NewClientComponent,
    children:[
      {
        path:'',
        redirectTo:'inicio',
        pathMatch:'full'
      },
      {
        path:'inicio',
        component:InicioComponent,
      },
      {
      path:'promocion',
      component:PromocionComponent,
      },
      {
        path:'evento',
        component:EventoComponent,
      },
      {
        path:'consola',
        component:ConsolaComponent,
      },
      {
        path:'juego',
        component:JuegoComponent,
      },
      {
        path:'signin',
        component:SigninComponent,
      },
      {
        path:'signup',
        component:SignupComponent,
      },
    ]
  },  
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full',
      },
      {
        path: 'usuarios',
        component: UsersComponent,
      },
      {
        path: 'consolas',
        component: ConsolasComponent,
      },
      {
        path: 'juegos',
        component: JuegosComponent,
      },
      {
        path: 'promociones',
        component: PromocionesComponent,
      },
      {
        path: 'eventos',
        component: EventosComponent,
      },
      {
        path: 'torneos',
        component: TorneosComponent,
      },
    ],    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
