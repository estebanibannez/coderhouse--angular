import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPelicula } from 'src/app/models/film';
import { of } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class PelisService {
	listadoPeliculas: IPelicula[] = [];
	constructor() {
		this.listadoPeliculas.push(
			{
				id: 1,
				fecha: '2012',
				nombre: 'Avengers.',
				descripcion:
					'Con un guión que jamás olvida el lado humano de sus héroes y secuencias de acción impresionantes, Los Vengadores cumple lo que promete y eleva la barra para las demás cintas de Marvel.',
				precio: 1000,
				estado: 0,
				imagen: 'avengers',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
			{
				id: 2,
				fecha: '2013',
				nombre: 'Iron Man 3.',
				descripcion:
					'Con ayuda de su liderazgo carismático, algunas impresionantes secuencias de acción e incluso algunas sorpresas, Iron Man 3 es una ingeniosa aventura entretenida y una gran incorporación al canon de Marvel.',
				precio: 2000,
				estado: 1,
				imagen: 'ironman3',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
			{
				id: 3,
				fecha: '2013',
				nombre: 'Thor: Un mundo Oscuro.',
				descripcion:
					'Puede no ser la mejor película que viene del Universo de Marvel, pero Thor: Un Mundo Oscuro sigue ofreciendo mucho del humor y acción de alto riesgo que los fanáticos han llegado a esperar.',
				precio: 3000,
				estado: 1,
				imagen: 'thormundooscuro',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
			{
				id: 4,
				fecha: '2014',
				nombre: 'Capitán América: El Soldado del Invierno.',
				descripcion:
					'Capitán América: El Soldado del Invierno, es una entrada superior en el mundo de Los Vengadores y es segura para emocionar a los fanáticos de Marvel.',
				precio: 5000,
				estado: 0,
				imagen: 'capsoldadoinvierno',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
			{
				id: 5,
				fecha: '2014',
				nombre: 'Guardianes de la Galaxia.',
				descripcion:
					'Guardianes de la Galaxia es tan irreverente como los fans del cómic de Marvel esperaban, es divertida, emocionante, llena de corazón, y buenos efectos visuales.',
				precio: 4500,
				estado: 0,
				imagen: 'guardianes',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
			{
				id: 6,
				fecha: '2015',
				nombre: 'Avengers la era de ultrón.',
				descripcion:
					'Exuberante y visualmente impresionante, Avengers: Era De Ultrón sirve como una atiborrada pero satisfactoria secuela, reuniendo al divertido reparto de su predecesora, algunos nuevos jugadores y un villano digno de los héroes más grandes del mundo.',
				precio: 6000,
				estado: 1,
				imagen: 'avengerseraultron',
				elenco: [
					{ nombre: 'Robert Downey Jr.', personaje: 'Tony Stark / Iron Man' },
					{ nombre: 'Chris Evans.', personaje: 'Steve Rogers / Capitán América' },
					{ nombre: 'Tom Hiddleston.', personaje: 'Loki' },
					{ nombre: 'Jeremy Renner.', personaje: 'Clint Barton / Ojo de Halcón' },
					{ nombre: 'Mark Ruffalo.', personaje: 'Bruce Banner / Hulk' },
					{ nombre: 'Chris Hemsworth.', personaje: 'Thor' },
					{ nombre: 'Scarlett Johansson.', personaje: 'Natasha Romanoff / Viuda Negra' },
					{ nombre: 'Clark Gregg .', personaje: 'Phil Coulson' },
					{ nombre: 'Cobie Smulders.', personaje: 'Maria Hill' },
					{ nombre: 'Samuel L. Jackson.', personaje: 'Nick Fury' },
				],
				stock: 0,
				cantidad: 0
			},
		);
	}

	getPeliculas(): Observable<IPelicula[]> {
		return of(this.listadoPeliculas);
	}
	getPeliculasById(id: number) {
		return this.listadoPeliculas.find((item) => {
			return item.id == id;
		});
	}
}
