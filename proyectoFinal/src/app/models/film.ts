export interface IPelicula {
	id: number;
	nombre: string;
	descripcion: string;
	fecha: string;
	precio: number;
	estado: estado;
	imagen: string;
	elenco: IElenco[];
	stock: number;
	cantidad: number;
}

export interface IElenco {
	nombre: string;
	personaje: string;
}

enum estado {
	prestamo,
	stock,
}
