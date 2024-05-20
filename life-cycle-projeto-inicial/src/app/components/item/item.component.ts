import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {
  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter;
  @Output() emitindoItemParaExcluir = new EventEmitter;

  faPen = faPen;
  faTrash = faTrash

  constructor(
    private listaDeCompraService: ListaDeCompraService
  ) { }

  ngOnChanges(): void {

  }

  ngOnInit(): void { }

  editarItem(): void {
    this.emitindoItemParaEditar.emit(this.item);
  }

  excluirItem(): void {
    this.emitindoItemParaExcluir.emit(this.item.id);
  }

  isComprado() {
    this.item.comprado = !this.item.comprado;
    this.listaDeCompraService.editarItem(this.item, this.item.nome)
  }

}
