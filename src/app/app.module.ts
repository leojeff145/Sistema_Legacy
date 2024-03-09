import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { ConfigurationComponent } from './theme/layout/admin/configuration/configuration.component';
import { NavBarComponent } from './theme/layout/admin/nav-bar/nav-bar.component';
import { NavigationComponent } from './theme/layout/admin/navigation/navigation.component';
import { NavLeftComponent } from './theme/layout/admin/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './theme/layout/admin/nav-bar/nav-right/nav-right.component';
import { NavContentComponent } from './theme/layout/admin/navigation/nav-content/nav-content.component';
import { NavLogoComponent } from './theme/layout/admin/navigation/nav-logo/nav-logo.component';
import { NavCollapseComponent } from './theme/layout/admin/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavGroupComponent } from './theme/layout/admin/navigation/nav-content/nav-group/nav-group.component';
import { NavItemComponent } from './theme/layout/admin/navigation/nav-content/nav-item/nav-item.component';
import { NavSearchComponent } from './theme/layout/admin/nav-bar/nav-left/nav-search/nav-search.component';
import { NavigationItem } from './theme/layout/admin/navigation/navigation';
import { ToggleFullScreenDirective } from './theme/shared/components/full-screen/toggle-full-screen';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewClientComponent } from './components/new-client/new-client.component';
import { ClientComponent } from './components/client/client.component';
import { UsersComponent } from './components/for-admin/users/users.component';
import { JuegosComponent } from './components/for-admin/juegos/juegos.component';
import { ConsolasComponent } from './components/for-admin/consolas/consolas.component';
import { PromocionesComponent } from './components/for-admin/promociones/promociones.component';
import { EventosComponent } from './components/for-admin/eventos/eventos.component';
import { TorneosComponent } from './components/for-admin/torneos/torneos.component';
import { NavBarHoriComponent } from './components/new-client/nav-bar-hori/nav-bar-hori.component';
import { PromocionComponent } from './components/new-client/promocion/promocion.component';
import { InicioComponent } from './components/new-client/inicio/inicio.component';
import { EventoComponent } from './components/new-client/evento/evento.component';
import { ConsolaComponent } from './components/new-client/consola/consola.component';
import { JuegoComponent } from './components/new-client/juego/juego.component';
import { SigninComponent } from './components/login/signin/signin.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { CliEventosComponent } from './components/client/cli-eventos/cli-eventos.component';
import { CliConsolasComponent } from './components/client/cli-consolas/cli-consolas.component';
import { CliNavbarComponent } from './components/client/cli-navbar/cli-navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GuestComponent,
    AdminComponent,
    ConfigurationComponent,
    NavBarComponent,
    NavigationComponent,
    NavLeftComponent,
    NavRightComponent,
    NavContentComponent,
    NavLogoComponent,
    NavCollapseComponent,
    NavGroupComponent,
    NavItemComponent,
    NavSearchComponent,
    ToggleFullScreenDirective,
    NewClientComponent,
    ClientComponent,
    UsersComponent,
    JuegosComponent,
    ConsolasComponent,
    PromocionesComponent,
    EventosComponent,
    TorneosComponent,
    NavBarHoriComponent,
    PromocionComponent,
    InicioComponent,
    EventoComponent,
    ConsolaComponent,
    JuegoComponent,
    //SigninComponent,
    SignupComponent,
    CliEventosComponent,
    CliConsolasComponent,
    CliNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [NavigationItem],
  bootstrap: [AppComponent],
})
export class AppModule {}
