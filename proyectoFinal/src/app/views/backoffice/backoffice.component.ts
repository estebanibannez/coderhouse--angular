import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { IPelicula } from "src/app/models/film";
import { PelisService } from "src/app/services/pelis.service";
import { EditarComponent } from "src/app/views/backoffice/editar/editar.component";
@Component({
  selector: "app-backoffice",
  templateUrl: "./backoffice.component.html",
  styleUrls: ["./backoffice.component.css"],
})
export class BackofficeComponent implements OnInit {
  formularioPeliculas!: FormGroup;
  listadoPeliculas: IPelicula[] = [];

  displayedColumns: string[] = [
    "id",
    "nombre",
    "descripcion",
    "precio",
    "actions",
  ];

  constructor(
    private fb: FormBuilder,
    private pelisService: PelisService,
    private _snackBar: MatSnackBar,
    private changeDetectorRefs: ChangeDetectorRef,
    private dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.obtenerPeliculas();
  }
  onSubmit() {
    if (this.formularioPeliculas.invalid) {
      this.formularioPeliculas.markAllAsTouched();
      this.guardarPelicula(this.formularioPeliculas.value);
    }
  }

  obtenerPeliculas() {
    this.pelisService.getPeliculas().subscribe((result: any) => {
      this.listadoPeliculas = result;
      console.log(this.listadoPeliculas);
    });
  }

  guardarPelicula(pelicula: any) {
    this.pelisService.addPelicula(pelicula).subscribe((result) => {
      console.log(result);
      this._snackBar.open("La pelicula se guardo éxitosamente!", "guardado", {
        duration: 3000,
      });
      this.resetForm();
    });
  }

  eliminarPelicula(id: string) {
    this.pelisService.deletePelicula(id).subscribe((result) => {
      console.log("pelicula eliminada", result);
      this._snackBar.open("La pelicula se elimino éxitosamente!", "eliminado", {
        duration: 3000,
      });
      this.changeDetectorRefs.detectChanges();
      this.obtenerPeliculas();
    });
  }

  editarPelicula(id: string) {
    const dialogRef = this.dialog.open(EditarComponent, {
      data: {
        id: id,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.changeDetectorRefs.detectChanges();
      this.obtenerPeliculas();
    });
  }

  actualizarPelicula(id: string, pelicula: any) {
    this.pelisService.updatePelicula(id, pelicula).subscribe((result) => {
      console.log("pelicula actualizada", result);
      this._snackBar.open(
        "La pelicula se actualizo éxitosamente!",
        "actualizado",
        {
          duration: 3000,
        },
      );
    });
  }

  createForm() {
    this.formularioPeliculas = this.fb.group({
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
    });
  }
  resetForm() {
    this.formularioPeliculas.reset();
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
        message: "El nombre  no puede tener más de 70 caracteres",
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
}
