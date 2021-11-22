import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: [ './card.component.css' ],
})
export class CardComponent implements OnInit {
	@Input() nombre: string = '';
	@Input() descripcion: string = '';
	@Input() imagen: string = '';
	@Input() logo: string = '';
	@Input() vermas: string = '';
	constructor() {}

	ngOnInit(): void {}
}
