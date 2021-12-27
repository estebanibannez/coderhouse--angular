import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable, Output } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IUser } from "src/app/models/user";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  ENDPOINT: string;
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  private userSubject: BehaviorSubject<any>;

  constructor(
    private http: HttpClient,
    private afsAuth: AngularFireAuth,
    private router: Router,
  ) {
    this.ENDPOINT = `${environment.ResourceServer}${environment.ApiVersion}/usuarios`;
    // this.isLoggedIn();
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("currentUser")!),
    );
  }

  public get userRol(): string {
    return this.userSubject.value.rol;
  }

  login(user: any): Observable<any> {
    const { email, password } = user;
    return this.http.get<any>(`${this.ENDPOINT}`, user).pipe(
      map((user: any) => {
        if (user) {
          debugger;
          const usuario = user.find((usuario: any) => {
            debugger;
            if (usuario.email === email && usuario.password === password) {
              return usuario;
            }
          });
          if (usuario) {
            localStorage.setItem("currentUser", JSON.stringify(usuario));
            this.userSubject.next(usuario);
            this.fireIsLoggedIn.emit("loggedIn");
            return usuario;
          }
        }
      }),
    );
  }

  async loginFirebase({ email, password }: any) {
    try {
      return await this.afsAuth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("ocurrio un error", error);
      return null;
    }
  }

  async registerFirebase({ email, password }: any) {
    try {
      return await this.afsAuth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log("ocurrio un error", error);
      return null;
    }
  }

  register(user: IUser): Observable<any> {
    debugger;
    return this.http.post<any>(`${this.ENDPOINT}/usuarios`, user).pipe(
      map((user: any) => {
        if (user) {
          debugger;

          localStorage.setItem("currentUser", JSON.stringify(user));
          this.userSubject.next(user);
          this.fireIsLoggedIn.emit("loggedIn");
          return user;
        }
      }),
    );
  }

  isLoggedIn() {
    if (localStorage.getItem("currentUser")) {
      return true;
    }
    return false;
  }

  getAuthorizationToken() {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")!);
    return currentUser.token;
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.userSubject.next(null);
    this.router.navigate(["/login"]);
  }

  getEmitter() {
    return this.fireIsLoggedIn;
  }
}
