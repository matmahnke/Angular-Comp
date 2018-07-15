import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
}


export class Entity{
  Id: string;
}
export class Produto extends Entity{
  Imagem: string;
  Nome: string;
  Preco: string;
  Peso: string;
}
export class Auth{
  Email: string;
  Senha: string;
}
export class Usuario extends Auth{
  Nome: string;
}
export class Mercado extends Auth{
  Imagem: string;
  Nome: string;
  Endereco: string;
}
