import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  // Usamos las rutas relativas para que el proxy funcione
  private randomUrl = '/random'; // Ruta relativa que será redirigida por el proxy
  private filterUrl = '/filter'; // Ruta relativa para filtrar actividades

  constructor(private http: HttpClient) {}

  getActivity(type?: string): Observable<any> {
    let url = this.randomUrl;

    if (type) {
      url = `${this.filterUrl}?type=${type}`;
    }

    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('Error en la API:', error.message);
    return throwError('Hubo un problema con la API; por favor intenta más tarde.');
  }
}
