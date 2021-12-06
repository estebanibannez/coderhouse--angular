import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.css' ],
})
export class RegisterComponent implements OnInit {
	formularioRegister: FormGroup;
	constructor(private fb: FormBuilder) {
		this.formularioRegister = this.fb.group({
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
			password: [
				'',
				{
					validators: [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ],
					updateOn: 'change',
				},
			],
			// ,
			// repassword: [
			// 	'',
			// 	{
			// 		validators: [ Validators.required ],
			// 		updateOn: 'change',
			// 	},
			// ],
		});
	}

	ngOnInit(): void {}

	register() {
		if (!this.formularioRegister.valid) this.formularioRegister.markAllAsTouched();
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
			{ type: 'pattern', message: 'Formato de correo electrónico inválido' },
		],
		password: [
			{ type: 'required', message: 'La contraseña es requerida' },
			{
				type: 'minlength',
				message: 'La contraseña debe tener al menos 6 caracteres',
			},
			{
				type: 'maxlength',
				message: 'La contraseña no puede tener más de 20 caracteres',
			},
		],

		// repassword: [
		// 	{ type: 'required', message: 'La contraseña es requerida' },
		// 	{
		// 		type: 'minlength',
		// 		message: 'La contraseña debe tener al menos 6 caracteres',
		// 	},
		// 	{
		// 		type: 'maxlength',
		// 		message: 'La contraseña no puede tener más de 20 caracteres',
		// 	},
		// ],
	};
}
