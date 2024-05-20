import { Item } from './interfaces/iItem';
import { ListaDeCompraService } from './service/lista-de-compra.service';
import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck {
  title = 'app-lista-de-compras';
  itemParaSerEditado!: Item;
  listaDeCompra!: Item[];

  constructor (
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnInit(): void {
      this.listaDeCompra = this.listaDeCompraService.getListaDeCompra();
      console.log(this.listaDeCompra);
  }

  ngDoCheck(): void {
    this.listaDeCompraService.setLocalStorage();
  }

  editarItem(item: Item): void {
    this.itemParaSerEditado = item;
  }

  excluirItem(id: number): void {
    const indexItem = this.listaDeCompra.findIndex((item) => item.id === id);
    this.listaDeCompra.splice(indexItem, 1);
  }

  limparLista(){
    this.listaDeCompra = [];
  }
}
