import { PelisService } from "src/app/services/pelis.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IPelicula } from "src/app/models/film";

@Component({
  selector: "app-info",
  templateUrl: "./info.component.html",
  styleUrls: ["./info.component.css"],
})
export class InfoComponent implements OnInit {
  params: any;
  pelicula: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private pelisService: PelisService,
  ) {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
    });
  }

  ngOnInit(): void {
    this.getPeliculaById(this.id);
  }

  getPeliculaById(id: string) {
    this.pelisService
      .getPeliculasById(id)
      .subscribe((data) => (this.pelicula = data));
  }
}
