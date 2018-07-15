import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { Produto } from '../../app/app.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['../app.component.css']
})
export class CreateComponent implements OnInit {

  selectedFile: File = null;
  produto: Produto;
  constructor() { }

  ngOnInit() {
  }
  async onClick(ng: NgForm) {
    this.produto = ng.value;
    this.produto.Imagem = await this.onUpload();
    await new Promise(resolve => setTimeout(resolve, 5));
    this.post();
  }

  post(){
    console.log(this.produto.Imagem);
    alert(JSON.stringify(this.produto));
  }

  //Chamado ao carregar o arquivo
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload(): any {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    var myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.produto.Imagem = myReader.result;
      return myReader.result;
    }
    myReader.readAsDataURL(this.selectedFile);
  }
}
