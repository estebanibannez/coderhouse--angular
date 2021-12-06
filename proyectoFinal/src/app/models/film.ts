export interface IPelicula {
	id: number;
	nombre: string;
	descripcion: string;
	fecha: string;
	precio: string;
	estado: estado;
	imagen: string;
	elenco: string;
}

enum estado {
	prestamo,
	stock,
}
