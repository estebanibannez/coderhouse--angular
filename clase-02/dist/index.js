console.log('____________');
console.log('Desafio Clase 2');
console.log('____________');
var Heroes = /** @class */ (function () {
    function Heroes(nombre, poderes, edad, volar) {
        this.listadoHeroes = [];
        this.nombre = nombre;
        this.poderes = poderes;
        this.universo = edad;
        this.volar = volar;
    }
    Heroes.prototype.listarHeroes = function () {
        console.log('Listado de heroes');
        return "" + this.listadoHeroes.map(function (value, idx) {
            console.log("> " + idx + ". " + value.nombre + " sus poderes son : " + (value.poderes[0], value.poderes[1]) + " pertenece al universo " + value.universo);
        });
    };
    Heroes.prototype.guardarHeroe = function (heroe) {
        this.listadoHeroes.push(heroe);
    };
    return Heroes;
}());
var heroe = new Heroes('Capitán america', ['Resistencia', 'Fuerza Sobrehumana', 'Lento Envejicimiento'], 'MCU', false);
var heroe2 = new Heroes('Hulk', ['Resistencia', 'Fuerza Sobrehumana', 'Invulnerabilidad'], 'MCU', false);
var heroe3 = new Heroes('Iron Man', ['Resistencia', 'Intelecto nivel genio', 'Vuelo supersónico'], 'MCU', false);
var heroe4 = new Heroes('Batman', ['Resistencia', 'Intelecto', 'Fuerza'], 'DC', false);
heroe.guardarHeroe(heroe);
heroe.guardarHeroe(heroe2);
heroe.guardarHeroe(heroe3);
heroe.guardarHeroe(heroe4);
console.log(heroe.listarHeroes());
