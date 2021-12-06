import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/models/film';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ],
})
export class ListComponent implements OnInit {
	listadoPeliculas: IPelicula[] = [];

	constructor() {
		this.listadoPeliculas.push(
			{
				id: 1,
				fecha: '2021-12-01',
				nombre: 'Avengers.',
				descripcion:
					'Con un guión que jamás olvida el lado humano de sus héroes y secuencias de acción impresionantes, Los Vengadores cumple lo que promete y eleva la barra para las demás cintas de Marvel.',
				precio: '10000',
				estado: 0,
				imagen: 'avengers',
				elenco: '',
			},
			{
				id: 1,
				fecha: '2021-12-02',
				nombre: 'Iron Man 3.',
				descripcion:
					'Con ayuda de su liderazgo carismático, algunas impresionantes secuencias de acción e incluso algunas sorpresas, Iron Man 3 es una ingeniosa aventura entretenida y una gran incorporación al canon de Marvel.',
				precio: '20000',
				estado: 1,
				imagen: 'ironman3',
				elenco: '',
			},
			{
				id: 1,
				fecha: '2021-12-03',
				nombre: 'Thor: Un mundo Oscuro.',
				descripcion:
					'Puede no ser la mejor película que viene del Universo de Marvel, pero Thor: Un Mundo Oscuro sigue ofreciendo mucho del humor y acción de alto riesgo que los fanáticos han llegado a esperar.',
				precio: '30000',
				estado: 1,
				imagen: 'thormundooscuro',
				elenco: '',
			},
			{
				id: 1,
				fecha: '2021-12-04',
				nombre: 'Capitán América: El Soldado del Invierno.',
				descripcion:
					'Capitán América: El Soldado del Invierno, es una entrada superior en el mundo de Los Vengadores y es segura para emocionar a los fanáticos de Marvel.',
				precio: '50000',
				estado: 0,
				imagen: 'capsoldadoinvierno',
				elenco: '',
			},
			{
				id: 1,
				fecha: '2021-12-04',
				nombre: 'Guardianes de la Galaxia.',
				descripcion:
					'Guardianes de la Galaxia es tan irreverente como los fans del cómic de Marvel esperaban, es divertida, emocionante, llena de corazón, y buenos efectos visuales.',
				precio: '50000',
				estado: 0,
				imagen: 'guardianes',
				elenco: '',
			},
			{
				id: 1,
				fecha: '2021-12-04',
				nombre: 'Avengers la era de ultrón.',
				descripcion:
					'Exuberante y visualmente impresionante, Avengers: Era De Ultrón sirve como una atiborrada pero satisfactoria secuela, reuniendo al divertido reparto de su predecesora, algunos nuevos jugadores y un villano digno de los héroes más grandes del mundo.',
				precio: '50000',
				estado: 1,
				imagen: 'avengerseraultron',
				elenco: '',
			},
		);
	}

	ngOnInit(): void {}
}
