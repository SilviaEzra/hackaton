import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css'],
  imports: [CommonModule]
})
export class BodyComponent {
  selectedActivity: string | null = null; // Para mostrar la actividad generada
  selectedCategory: string = ''; // Categoría seleccionada desde el menú

  constructor(private activityService: ActivityService) {}

  // Método para generar una actividad
  generateActivity() {
    if (!this.selectedCategory) {
      // Generar actividad aleatoria si no hay categoría seleccionada
      this.activityService.getActivity().subscribe(
        response => {
          this.selectedActivity = response.activity; // Mostrar la actividad aleatoria generada
        },
        error => {
          console.error('Error al generar actividad aleatoria:', error);
        }
      );
    } else {
      // Si hay una categoría seleccionada, generar una actividad de esa categoría
      this.activityService.getActivity(this.selectedCategory).subscribe(
        response => {
          console.log(response);  // Verificar el contenido de la respuesta
          // Seleccionar un elemento aleatorio del array devuelto
          if (Array.isArray(response) && response.length > 0) {
            const randomIndex = Math.floor(Math.random() * response.length);
            this.selectedActivity = response[randomIndex].activity; // Mostrar la actividad aleatoria
          } else {
            this.selectedActivity = 'No se encontraron actividades para esta categoría.';
          }
        },
        error => {
          console.error('Error al generar actividad por categoría:', error);
        }
      );
    }
  }
  

  // Método para recibir la categoría seleccionada desde el menú
  setCategory(category: string) {
    this.selectedCategory = category; // Asignar la categoría seleccionada
  }
}
