import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IPelicula } from "src/app/models/film";
import { CartService } from "src/app/services/cart.service";
import { PelisService } from "src/app/services/pelis.service";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  // listadoPeliculas: IPelicula[] = [];
  $listadoPeliculas!: Observable<any>;

  constructor(
    private pelisService: PelisService,
    private cartService: CartService,
  ) {
    this.getPeliculas();
  }

  ngOnInit(): void {}

  getPeliculas() {
    this.$listadoPeliculas = this.pelisService.getPeliculas();
  }
  onAddToCart(item: any) {
    this.cartService.addToCart(item);
  }
}
