import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  formularioLogin!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}
  ngOnInit() {
    this.formularioLogin = this.fb.group({
      correo: [
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
          // validators: [ Validators.required, Validators.minLength(6), Validators.maxLength(20) ],
          updateOn: "change",
        },
      ],
    });
  }

  VALIDATION_MESSAGES = {
    correo: [
      { type: "required", message: "El correo electrónico es requerido" },
      { type: "pattern", message: "Formato de correo electrónico inválido" },
    ],
    password: [
      { type: "required", message: "La contraseña es requerida" },
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

  // async enviarFormulario() {
  //   if (!this.formularioLogin.valid) this.formularioLogin.markAllAsTouched();
  //   this.submitted = true;
  //   const user = {
  //     email: this.formularioLogin.get("correo")!.value,
  //     password: this.formularioLogin.get("password")!.value,
  //   };

  //   const res = await this.authService.loginFirebase(user);
  //   console.log(res);
  //   if (res != null) {
  //     this.router.navigateByUrl("/home");
  //   } else {
  //     this._snackBar.open("Ocurrio un error", "", {
  //       duration: 3000,
  //     });
  //   }
  // }

  enviarFormulario() {
    if (!this.formularioLogin.valid) this.formularioLogin.markAllAsTouched();
    this.submitted = true;
    const user = {
      email: this.formularioLogin.get("correo")!.value,
      password: this.formularioLogin.get("password")!.value,
    };
    this.authService.login(user).subscribe(
      (data) => {
        this.router.navigateByUrl("/home");
      },
      (error) => {
        this._snackBar.open("Ocurrio un error", error, {
          duration: 3000,
        });
      },
    );
  }
}
