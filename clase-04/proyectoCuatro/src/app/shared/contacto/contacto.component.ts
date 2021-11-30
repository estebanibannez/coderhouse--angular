import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-contacto',
	templateUrl: './contacto.component.html',
	styleUrls: [ './contacto.component.css' ],
})
export class ContactoComponent implements OnInit {
	formularioContacto: FormGroup;
	constructor(private fb: FormBuilder) {
		this.formularioContacto = this.fb.group({
			nombres: [
				'',
				Validators.compose([
					Validators.required,
					Validators.minLength(4),
					Validators.maxLength(70),
					Validators.pattern('^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœñ ]+$'),
				]),
			],
			correo: [
				'',
				{
					validators: [
						Validators.required,
						Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$'),
					],
					updateOn: 'change',
				},
			],
			fono: [
				'',
				{
					validators: [
						Validators.required,
						Validators.minLength(8),
						Validators.maxLength(10),
						Validators.pattern(/^-?(0|[1-9]\d*)?$/),
					],
					updateOn: 'change',
				},
			],
			tipo: [
				'',
				{
					validators: [ Validators.required ],
					updateOn: 'change',
				},
			],
			mensaje: [
				'',
				{
					validators: [ Validators.required, Validators.minLength(1), Validators.maxLength(100) ],
					updateOn: 'blur',
				},
			],
		});
	}

	ngOnInit(): void {}

	enviarFormulario() {
		if (!this.formularioContacto.valid) this.formularioContacto.markAllAsTouched();
	}

	VALIDATION_MESSAGES = {
		nombres: [
			{ type: 'required', message: 'El nombre es requerido' },
			{
				type: 'minlength',
				message: 'El nombre debe tener al menos 4 caracteres',
			},
			{
				type: 'maxlength',
				message: 'El nombre no puede tener más de 70 caracteres',
			},
			{ type: 'pattern', message: 'El nombre debe contener solo letras' },
		],
		correo: [
			{ type: 'required', message: 'El correo electrónico es requerido' },
			{
				type: 'minlength',
				message: 'El nombre debe tener al menos 6 caracteres',
			},
			{
				type: 'maxlength',
				message: 'El nombre no puede tener más de 70 caracteres',
			},
			{ type: 'pattern', message: 'Formato de correo electrónico inválido' },
		],
		fono: [
			{ type: 'required', message: 'El teléfono es requerido' },
			{
				type: 'minlength',
				message: 'El teléfono debe tener al menos 8 caracteres',
			},
			{
				type: 'maxlength',
				message: 'El teléfono no puede tener más de 10 caracteres',
			},
			{ type: 'pattern', message: 'El teléfono debe contener solo números' },
		],
		tipo: [ { type: 'required', message: 'Seleccione al menos un motivo.' } ],
		mensaje: [ { type: 'required', message: 'El mensaje es requerido' } ],
	};
}
