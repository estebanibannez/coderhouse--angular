import { PelisService } from 'src/app/services/pelis.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPelicula } from 'src/app/models/film';

@Component({
	selector: 'app-info',
	templateUrl: './info.component.html',
	styleUrls: [ './info.component.css' ],
})
export class InfoComponent implements OnInit {
	params: any;
	pelicula: any;
	id: any;
	constructor(private route: ActivatedRoute, private pelisService: PelisService) {}

	ngOnInit(): void {
		this.route.params.subscribe((params) => {
			this.id = params['id'];
		});
		this.getPeliculaById(parseInt(this.id));
	}

	getPeliculaById(id: number) {
		debugger
		this.pelicula = this.pelisService.getPeliculasById(id);
		console.log(this.pelicula);
	}
}
