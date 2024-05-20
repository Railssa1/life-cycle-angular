import { Item } from 'src/app/interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = JSON.parse(localStorage.getItem('listaDeCompra') || '[]');

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  public getListaDeCompra(){
    return this.listaDeCompra;
  }

  private criarItem(nomeItem: string): Item {
    const id = this.listaDeCompra.length + 1;
    const nome = nomeItem;
    const item: Item =  {
      id,
      nome,
      data: new Date().toLocaleDateString('pt-br'),
      comprado: false
    };

    return item;
  }

  public adicionarItem(nomeItem: string): void {
    const nome = nomeItem;
    const item = this.criarItem(nome);
    this.getListaDeCompra().push(item);
  }

  public editarItem(itemAntigo: Item, nomeEditadoItem: string): void{
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      comprado: itemAntigo.comprado,
      data: new Date().toLocaleDateString("pt-br")
    };

    const idItem = itemAntigo.id;
    this.getListaDeCompra().splice(Number(idItem) - 1, 1, itemEditado);
  }

  setLocalStorage(){
    localStorage.setItem('listaDeCompra', JSON.stringify(this.listaDeCompra));
  }
}
