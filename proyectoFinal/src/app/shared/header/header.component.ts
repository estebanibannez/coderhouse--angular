import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;
  userLogged: boolean | undefined;
  backendUser: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.getRoles();
    // this.getUserLogged();
  }
  // getUserLogged() {
  //   this.isLogged = this.authService.isLoggedIn();
  // }

  logout() {
    this.authService.logout();
  }

  ngAfterViewInit(): void {
    this.getRoles();
  }

  getRoles() {
    this.authService.getEmitter().subscribe((data) => {
      if (data === "loggedIn") {
        this.userLogged = true;

        if (this.authService.userRol != null) {
          if (this.authService.userRol.toLowerCase().includes("admin")) {
            this.backendUser = true;
          }
        }
      }
    });
  }
}
