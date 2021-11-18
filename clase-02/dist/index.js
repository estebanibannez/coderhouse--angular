console.log('_______________');
console.log('Desafio Clase 2');
var Heroe = /** @class */ (function () {
    function Heroe(nombre, poderes, edad, volar) {
        this.nombre = nombre;
        this.poderes = poderes;
        this.universo = edad;
        this.volar = volar;
    }
    return Heroe;
}());
var listadoHeroes = [];
var listarHeroes = function () {
    return "" + listadoHeroes.map(function (value, idx) {
        console.log("> " + idx + ". " + value.nombre + " sus poderes son : " + (value.poderes[0],
            value.poderes[1]) + " pertenece al universo " + value.universo);
    });
};
// guardarHeroe: (heroe: ISuperheroe) => void;
var guardarHeroe = function (heroe) {
    listadoHeroes.push(heroe);
};
var heroe = new Heroe('Capitán america', ['Resistencia', 'Fuerza Sobrehumana', 'Lento Envejicimiento'], 'MCU', false);
var heroe2 = new Heroe('Hulk', ['Resistencia', 'Fuerza Sobrehumana', 'Invulnerabilidad'], 'MCU', false);
var heroe3 = new Heroe('Iron Man', ['Resistencia', 'Intelecto nivel genio', 'Vuelo supersónico'], 'MCU', true);
var heroe4 = new Heroe('Batman', ['Resistencia', 'Intelecto', 'Fuerza'], 'DC', false);
guardarHeroe(heroe);
guardarHeroe(heroe2);
guardarHeroe(heroe3);
guardarHeroe(heroe4);
console.log(listarHeroes());
