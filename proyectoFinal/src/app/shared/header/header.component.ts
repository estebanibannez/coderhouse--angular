import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  isLogged: boolean = false;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    this.getUserLogged();
  }
  getUserLogged() {
    this.isLogged = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}
