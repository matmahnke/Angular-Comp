import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BuscaComponent } from './busca/busca.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { CreateMercadoComponent } from './create-mercado/create-mercado.component';
import { ProfileMercadoComponent } from './profile-mercado/profile-mercado.component';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateComponent },
  { path: 'create/mercado', component: CreateMercadoComponent },
  { path: 'profile/mercado', component: ProfileMercadoComponent },
  { path: 'busca', component: BuscaComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
