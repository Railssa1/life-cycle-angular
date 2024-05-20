import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from './../../service/lista-de-compra.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit, OnChanges {
  @Input() itemQueVaiSerEditado!: Item;
  valorItem!: string;
  isEditando: boolean = false;
  textoBotao = "Salvar item";

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  editarItem(): void {
    this.listaDeCompraService.editarItem(this.itemQueVaiSerEditado, this.valorItem);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado']?.firstChange){
      this.valorItem = this.itemQueVaiSerEditado?.nome;
      this.isEditando = true;
      this.textoBotao = "Editar item";
    }
  }

  ngOnInit(): void {
  }

  adicionarItem(){
    this.listaDeCompraService.adicionarItem(this.valorItem);
    this.limparInput();
  }

  limparInput(){
    this.valorItem = "";
  }
}
