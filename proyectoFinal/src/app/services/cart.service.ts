import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICart } from 'src/app/models/cart';
import { IPelicula } from 'src/app/models/film';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	listadoPeliculas: IPelicula[] = [];
	cartTotal = 0;

	carrito: ICart = {
		id: 0,
		peliculas: [],
		cantidad: 0,
		fechaCompra: new Date(),
		total: 0,
		estado: 0,
	};

	private pelisAddedSource = new Subject<any>();

	peliculasAgregadas$ = this.pelisAddedSource.asObservable();

	constructor() { }

	//agrega una pelicula al carrito
	addToCart(pelicula: IPelicula) {
		debugger;
		let exists = false;
		this.carrito.id = 1;
		this.carrito.fechaCompra = new Date();
		this.carrito.estado = 1;
		this.cartTotal += pelicula.precio;
		this.carrito.total += pelicula.precio;

		// Busca pelicula en el carrito e incremente la cantidad
		this.listadoPeliculas = this.listadoPeliculas.map((_peli) => {
			if (_peli.id === pelicula.id) {
				// this.carrito.peliculas.push(_peli);
				_peli.cantidad++;
				exists = true;
			}
			return _peli;
		});

		// Agrega un producto nuevo al carrito si es un producto nuevo
		if (!exists) {
			pelicula.precio = pelicula.precio;
			pelicula.cantidad = 1;

			// this.listadoPeliculas.push(pelicula);
			this.carrito.peliculas.push(pelicula);
			this.carrito.cantidad = 1;
		}

		this.pelisAddedSource.next({
			// peliculas: this.listadoPeliculas,
			carrito: this.carrito,
			cartTotal: this.cartTotal,
		});
	}
}
