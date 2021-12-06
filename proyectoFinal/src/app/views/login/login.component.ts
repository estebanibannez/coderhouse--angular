import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.css' ],
})
export class LoginComponent implements OnInit {
	formularioLogin: FormGroup;
	constructor(private fb: FormBuilder) {
		this.formularioLogin = this.fb.group({
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
			password: [
				'',
				{
					// validators: [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ],
					updateOn: 'change',
				},
			],
		});
	}
	ngOnInit(): void {}

	enviarFormulario() {
		if (!this.formularioLogin.valid) this.formularioLogin.markAllAsTouched();
	}

	VALIDATION_MESSAGES = {
		correo: [
			{ type: 'required', message: 'El correo electrónico es requerido' },
			{ type: 'pattern', message: 'Formato de correo electrónico inválido' },
		],
		password: [
			{ type: 'required', message: 'La contraseña es requerida' },
			// {
			// 	type: 'minlength',
			// 	message: 'La contraseña debe tener al menos 6 caracteres',
			// },
			// {
			// 	type: 'maxlength',
			// 	message: 'La contraseña no puede tener más de 20 caracteres',
			// },
		],
	};
}
