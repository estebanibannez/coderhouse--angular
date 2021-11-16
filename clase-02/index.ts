console.log('_______________');
console.log('Desafio Clase 2');

interface ISuperheroe {
	nombre: string;
	poderes: string[];
	volar: boolean;
	universo: string;

	listarHeroes: () => string;
	guardarHeroe: (heroe: ISuperheroe) => void;
}

class Heroes implements ISuperheroe {
	listadoHeroes: ISuperheroe[] = [];

	nombre: string;
	poderes: string[];
	universo: string;
	volar: boolean;

	constructor(nombre: string, poderes: Array<string>, edad: string, volar: boolean) {
		this.nombre = nombre;
		this.poderes = poderes;
		this.universo = edad;
		this.volar = volar;
	}

	listarHeroes(): string {
		console.log('Listado de heroes');
		return `${this.listadoHeroes.map((value, idx) => {
			console.log(`> ${idx}. ${value.nombre} sus poderes son : ${(value.poderes[0], value.poderes[1])} pertenece al universo ${value.universo}`);
		})}`;
	}

	guardarHeroe(heroe: ISuperheroe) {
		this.listadoHeroes.push(heroe);
	}
}

let heroe: ISuperheroe = new Heroes(
	'Capitán america',
	[ 'Resistencia', 'Fuerza Sobrehumana', 'Lento Envejicimiento' ],
	'MCU',
	false,
);
let heroe2: Heroes = new Heroes('Hulk', [ 'Resistencia', 'Fuerza Sobrehumana', 'Invulnerabilidad' ], 'MCU', false);
let heroe3: Heroes = new Heroes(
	'Iron Man',
	[ 'Resistencia', 'Intelecto nivel genio', 'Vuelo supersónico' ],
	'MCU',
	true,
);
let heroe4: Heroes = new Heroes(
	'Batman',
	[ 'Resistencia', 'Intelecto', 'Fuerza' ],
	'DC',
	false,
);

heroe.guardarHeroe(heroe);
heroe.guardarHeroe(heroe2);
heroe.guardarHeroe(heroe3);
heroe.guardarHeroe(heroe4);

console.log(heroe.listarHeroes());
