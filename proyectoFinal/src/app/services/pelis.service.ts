import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPelicula } from "src/app/models/film";
import { of } from "rxjs";
import { DATA } from "src/app/models/mockData";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class PelisService {
  ENDPOINT: string;
  peliculasList!: Observable<IPelicula>;

  constructor(private http: HttpClient) {
    this.ENDPOINT = `https://61c097ee33f24c00178234f9.mockapi.io/api/v1`;
  }

  // getPeliculas(): Promise<any> {
  //   return Promise.resolve(DATA);
  // }

  getPeliculas() {
    return this.http
      .get<IPelicula[]>(`${this.ENDPOINT}/peliculas`)
      .pipe(map((data: any) => data));
  }

  addPelicula(pelicula: IPelicula): Observable<any> {
    console.log(pelicula);
    return this.http.post<IPelicula>(`${this.ENDPOINT}/peliculas`, pelicula);
  }

  deletePelicula(id: string): Observable<any> {
    return this.http.delete<IPelicula>(`${this.ENDPOINT}/peliculas/${id}`);
  }

  updatePelicula(id: string, pelicula: IPelicula): Observable<any> {
    return this.http.put<IPelicula>(
      `${this.ENDPOINT}/peliculas/${id}`,
      pelicula,
    );
  }
  //   getPeliculas(): Observable<IPelicula[]> {
  //     return of(this.listadoPeliculas);
  //   }
  getPeliculasById(param: string): Observable<any> {
    return this.http.get<any>(this.ENDPOINT + "/peliculas/" + param);
  }

  // getPeliculasById(id: number) {
  //   return this.listadoPeliculas.find((item) => {
  //     return item.id == id;
  //   });
  // }
}
