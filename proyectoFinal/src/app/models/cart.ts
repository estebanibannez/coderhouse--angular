import { IPelicula } from 'src/app/models/film';

export interface ICart {
	id: number;
	peliculas: IPelicula[];
	cantidad: number;
	fechaCompra: Date;
	total: number;
	estado: estado;
}

enum estado {
	activo,
	noactivo,
}
