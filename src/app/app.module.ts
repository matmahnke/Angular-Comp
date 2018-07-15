import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BuscaComponent } from './busca/busca.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { CreateMercadoComponent } from './create-mercado/create-mercado.component';
import { ProfileMercadoComponent } from './profile-mercado/profile-mercado.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BuscaComponent,
    LoginComponent,
    ProfileComponent,
    CreateComponent,
    CreateMercadoComponent,
    ProfileMercadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
