import { CartService } from './../../services/cart.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ICart } from 'src/app/models/cart';
import { IPelicula } from 'src/app/models/film';

@Component({
	selector: 'app-cart',
	templateUrl: './cart.component.html',
	styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
	carrito: any;
	listadoPeliculas: IPelicula[] = [];
	numPeliculas = 0;
	cartTotal = 0;
	changeDetectorRef: ChangeDetectorRef;

	constructor(private cartService: CartService, changeDetectorRef: ChangeDetectorRef) {
		this.changeDetectorRef = changeDetectorRef;
	}


	ngOnInit(): void {
		this.cartService.peliculasAgregadas$.subscribe((data) => {
			debugger;
			this.listadoPeliculas = data.carrito.peliculas;
			this.carrito = data.carrito;
			this.cartTotal = data.cartTotal;
			this.numPeliculas = data.carrito.peliculas.reduce((acc: any, pelicula: any) => {
				debugger
				acc += pelicula.cantidad;
				return acc;
			}, 0);
		});
		this.changeDetectorRef.detectChanges();
	}

	deleteProduct(id: any) {
	}
}
