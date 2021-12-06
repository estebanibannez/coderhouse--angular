import { IPelicula } from 'src/app/models/film';

export interface ICart {
	id: number;
	peliculas: IPelicula[];
	fechaCompra: Date;
	total: number;
	estado: estado;
}

enum estado {
	activo,
	noactivo,
}
