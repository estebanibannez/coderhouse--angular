import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "proyectoFinal";
  userLogged!: boolean;
  backendUser: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    debugger;
    this.authService.getEmitter().subscribe((data) => {
      debugger;
      if (data === "loggedIn") {
        this.userLogged = true;

        if (this.authService.userRol != null) {
          if (this.authService.userRol.toLowerCase().includes("admin")) {
            debugger;
            this.backendUser = true;
          }
        }
      }
    });
  }
}
