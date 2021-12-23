import { Component, OnInit, Inject, Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IPelicula } from "src/app/models/film";
import { PelisService } from "src/app/services/pelis.service";
@Component({
  selector: "app-editar",
  templateUrl: "./editar.component.html",
  styleUrls: ["./editar.component.css"],
})
export class EditarComponent implements OnInit {
  pelicula!: IPelicula;
  formularioPeliculaEditar!: FormGroup;
  id: string;
  constructor(
    private dialogRef: MatDialogRef<EditarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pelisService: PelisService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
  ) {
    this.createForm();
    // console.log(data);
    this.obtenerPeliculaById(data.id);
    this.id = data.id;
  }
  ngOnInit(): void {}
  public closeMe() {
    this.dialogRef.close();
  }

  obtenerPeliculaById(id: string) {
    this.pelisService.getPeliculasById(id).subscribe((result: IPelicula) => {
      console.log(result);
      this.pelicula = result;
      this.formularioPeliculaEditar.patchValue({
        nombre: result.nombre,
        descripcion: result.descripcion,
        precio: result.precio,
        stock: result.stock,
      });
    });
  }

  createForm() {
    this.formularioPeliculaEditar = this.fb.group({
      nombre: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(70),
          // Validators.pattern(
          //   "^[a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœñ ]+$",
          // ),
        ]),
      ],
      descripcion: [
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(300),
        ]),
      ],
      precio: ["", Validators.compose([Validators.required])],
      stock: [
        "",
        {
          validators: [Validators.required],
          updateOn: "change",
        },
      ],
    });
  }

  VALIDATION_MESSAGES = {
    nombre: [
      { type: "required", message: "El nombre de la pelicula es requerido" },
      {
        type: "minlength",
        message: "El nombre de la pelicula debe tener al menos 4 caracteres",
      },
      {
        type: "maxlength",
        message: "El nombre no puede tener más de 70 caracteres",
      },
      // {
      //   type: "pattern",
      //   message: "El nombre de la pelicula debe contener solo letras",
      // },
    ],
    descripcion: [
      { type: "required", message: "La descripción es requerida" },
      {
        type: "minlength",
        message: "La descripción debe tener al menos 4 caracteres",
      },
      {
        type: "maxlength",
        message: "La descripción no puede tener más de 300 caracteres",
      },
    ],
    precio: [{ type: "required", message: "El precio es requerido" }],
    stock: [{ type: "required", message: "El stock es requerido" }],
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
  };

  onEdit() {
    if (!this.formularioPeliculaEditar.valid)
      this.formularioPeliculaEditar.markAllAsTouched();
    this.pelisService
      .updatePelicula(this.id, this.formularioPeliculaEditar.value)
      .subscribe((result) => {
        debugger
        console.log(result);
        this._snackBar.open("La pelicula se actualizó éxitosamente!", "guardado", {
          duration: 3000,
        });
      });
  }
}
