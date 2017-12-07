import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-exemplos-pipes',
  templateUrl: './exemplos-pipes.component.html',
  styleUrls: ['./exemplos-pipes.component.css']
})
export class ExemplosPipesComponent implements OnInit {

  livro: any = {
    titulo: 'assassinato no expresso oriente',
    rating: 4.45435,
    numeroPaginas: 231,
    preco: 19.90,
    dataLancamento: new Date(2014, 4, 15),
    url: 'https://images-na.ssl-images-amazon.com/images/I/51224gzHJ2L.jpg'
  }

  livros: string[] = ['Java', 'Angular 2'];

  filtro: string;

  addLivro(curso: string) {
    this.livros.push(curso);
  }

  obterLivros() {
    if( this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '' ){
      return this.livros;
    }

    return this.livros.filter((v) => {
      if( v.toLowerCase().indexOf(this.filtro.toLowerCase()) >= 0 ){
        return true;
      }
      return false;
    });
  }

  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000)
  });

  valorAsync2 = Observable.interval(3000)
    .map(valor => 'Valor Assíncrono 2');

  constructor() { }

  ngOnInit() {
  }

}
