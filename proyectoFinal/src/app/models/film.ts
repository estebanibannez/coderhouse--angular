export interface IPelicula {
	id: number;
	nombre: string;
	descripcion: string;
	fecha: string;
	precio: string;
	estado: estado;
	imagen: string;
	elenco: IElenco[];
}

export interface IElenco {
	nombre: string;
	personaje: string;
}

enum estado {
	prestamo,
	stock,
}
