import { CartService } from "./../../services/cart.service";
import {
  ChangeDetectorRef,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { ICart } from "src/app/models/cart";
import { IPelicula } from "src/app/models/film";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit, OnChanges {
  carrito: any;
  listadoPeliculas: IPelicula[] = [];
  numPeliculas = 0;
  cartTotal = 0;
  changeDetectorRef: ChangeDetectorRef;
  cantidad = 0;

  constructor(
    private cartService: CartService,
    changeDetectorRef: ChangeDetectorRef,
  ) {
    this.changeDetectorRef = changeDetectorRef;
  }

  ngOnChanges(changes: SimpleChanges): void {
    debugger;

    console.log(changes);
    throw new Error("Method not implemented.");
  }

  ngOnInit(): void {
    this.cartService.peliculasAgregadas$.subscribe((data) => {
      debugger;
      this.listadoPeliculas = data.carrito.peliculas;
      this.carrito = data.carrito;
      this.cartTotal = data.cartTotal;
      this.numPeliculas = data.carrito.peliculas.reduce(
        (acc: any, pelicula: any) => {
          debugger;
          acc += pelicula.cantidad;
          return acc;
        },
        0,
      );
    });
    this.changeDetectorRef.detectChanges();
  }

  deleteProduct(id: any) {}
}
