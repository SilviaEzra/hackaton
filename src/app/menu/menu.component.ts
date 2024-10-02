import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Output() categorySelected = new EventEmitter<string>();

  // Método para emitir la categoría seleccionada
  selectCategory(category: string) {
    this.categorySelected.emit(category);
  }
}
