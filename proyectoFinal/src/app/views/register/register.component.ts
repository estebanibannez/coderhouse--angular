import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  formularioRegister: FormGroup;
  constructor(
    private fb: FormBuilder,
    private _authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {
    this.formularioRegister = this.fb.group({
      firstname: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern(
            "^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœñ ]+$",
          ),
        ]),
      ],
      lastname: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(70),
          Validators.pattern(
            "^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœñ ]+$",
          ),
        ]),
      ],
      email: [
        "",
        {
          validators: [
            Validators.required,
            Validators.pattern(
              "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$",
            ),
          ],
          updateOn: "change",
        },
      ],
      password: [
        "",
        {
          validators: [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
          updateOn: "change",
        },
      ],
      rol: [
        "admin",
        {
          validators: [Validators.required],
          updateOn: "change",
        },
      ],
    });
  }

  ngOnInit(): void {}

  VALIDATION_MESSAGES = {
    firstname: [
      { type: "required", message: "El nombre es requerido" },
      {
        type: "minlength",
        message: "El nombre debe tener al menos 4 caracteres",
      },
      {
        type: "maxlength",
        message: "El nombre no puede tener más de 70 caracteres",
      },
      { type: "pattern", message: "El nombre debe contener solo letras" },
    ],
    lastname: [
      { type: "required", message: "Los apellidos son requeridos" },
      {
        type: "minlength",
        message: "Los apellidos debe tener al menos 4 caracteres",
      },
      {
        type: "maxlength",
        message: "Los apellidos no puede tener más de 70 caracteres",
      },
      { type: "pattern", message: "Los apellidos deben contener solo letras" },
    ],
    email: [
      { type: "required", message: "El correo electrónico es requerido" },
      { type: "pattern", message: "Formato de correo electrónico inválido" },
    ],
    password: [
      { type: "required", message: "La contraseña es requerida" },
      {
        type: "minlength",
        message: "La contraseña debe tener al menos 6 caracteres",
      },
      {
        type: "maxlength",
        message: "La contraseña no puede tener más de 20 caracteres",
      },
    ],
    rol: [{ type: "required", message: "La contraseña es requerida" }],
  };

  get data() {
    return this.formularioRegister.controls;
  }

  onSubmit() {
    if (this.formularioRegister.invalid) {
      this.formularioRegister.markAllAsTouched();
    } else {
      this._authService.register(this.formularioRegister.value).subscribe(
        (result) => {
          this._snackBar.open("Se creó tu cuenta con éxito.", "Success", {
            duration: 3000,
          });

          this.router.navigate(["/home"]);
        },
        (err) => {
          console.log(err.error.error.message);
        },
      );
    }
  }

  // async onSubmit() {
  //   if (this.formularioRegister.invalid) {
  //     this.formularioRegister.markAllAsTouched();
  //   } else {
  //     localStorage.setItem("firstname", this.data.firstname.value);
  //     localStorage.setItem("lastname", this.data.lastname.value);
  //     localStorage.setItem("email", this.data.email.value);
  //     // localStorage.setItem("password", this.data.password.value);

  //     const res = await this._authService.registerFirebase(
  //       this.formularioRegister.value,
  //     );
  //     this.router.navigate(["/home"]);
  //     console.log(res);
  //   }
  // }
}
