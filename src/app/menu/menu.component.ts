import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() categorySelected = new EventEmitter<string>();
  selectedButton: string = ''; // Variable para almacenar el botón seleccionado

  // Método para emitir la categoría seleccionada y marcar el botón activo
  selectCategory(category: string) {
    this.selectedButton = category; // Almacena la categoría seleccionada
    this.categorySelected.emit(category); // Emite la categoría seleccionada
  }
}
