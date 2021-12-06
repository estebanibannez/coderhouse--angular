import { Component, OnInit } from '@angular/core';
import { IPelicula } from 'src/app/models/film';
import { PelisService } from 'src/app/services/pelis.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: [ './list.component.css' ],
})
export class ListComponent implements OnInit {
	listadoPeliculas: IPelicula[] = [];

	constructor(private pelisService: PelisService) {
		this.getPeliculas();
	}

	ngOnInit(): void {}

	getPeliculas() {
		this.pelisService.getPeliculas().subscribe((film) => (this.listadoPeliculas = film));
	}
}
