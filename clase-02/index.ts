console.log('_______________');
console.log('Desafio Clase 2');

interface ISuperheroe {
	nombre: string;
	poderes: string[];
	volar: boolean;
	universo: string;
}

class Heroe implements ISuperheroe {
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
}

let listadoHeroes: ISuperheroe[] = [];

const listarHeroes = () => {
	return `${listadoHeroes.map((value, idx) => {
		console.log(
			`> ${idx}. ${value.nombre} sus poderes son : ${(value.poderes[0],
			value.poderes[1])} pertenece al universo ${value.universo}`,
		);
	})}`;
};
// guardarHeroe: (heroe: ISuperheroe) => void;

const guardarHeroe = (heroe: ISuperheroe) => {
	listadoHeroes.push(heroe);
};

let heroe: ISuperheroe = new Heroe(
	'Capitán america',
	[ 'Resistencia', 'Fuerza Sobrehumana', 'Lento Envejicimiento' ],
	'MCU',
	false,
);
let heroe2: Heroe = new Heroe('Hulk', [ 'Resistencia', 'Fuerza Sobrehumana', 'Invulnerabilidad' ], 'MCU', false);
let heroe3: Heroe = new Heroe('Iron Man', [ 'Resistencia', 'Intelecto nivel genio', 'Vuelo supersónico' ], 'MCU', true);
let heroe4: Heroe = new Heroe('Batman', [ 'Resistencia', 'Intelecto', 'Fuerza' ], 'DC', false);

guardarHeroe(heroe);
guardarHeroe(heroe2);
guardarHeroe(heroe3);
guardarHeroe(heroe4);

console.log(listarHeroes());
