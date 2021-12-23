import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { IUser } from "src/app/models/user";
import { AngularFireAuth } from "@angular/fire/compat/auth";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  ENDPOINT: string;
  constructor(private http: HttpClient, private afsAuth: AngularFireAuth) {
    this.ENDPOINT = `https://61c097ee33f24c00178234f9.mockapi.io/api/v1`;
    this.isLoggedIn();
  }

  login(user: any): Observable<any> {
    const { email, password } = user;
    return this.http.get<any>(`${this.ENDPOINT}/usuarios`, user).pipe(
      map((user: any) => {
        if (user) {
          debugger;
          console.log("usuarios.", user);
          const usuario = user.find((usuario: any) => {
            debugger;
            if (usuario.email === email && usuario.password === password) {
              return usuario;
            }
          });
          console.log("existe.", usuario);
          if (usuario) {
            localStorage.setItem("currentUser", JSON.stringify(user));
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
    return this.http.post<any>(`${this.ENDPOINT}/usuarios`, user).pipe(
      map((user: any) => {
        if (user) {
          debugger;
          localStorage.setItem("currentUser", JSON.stringify(user));
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
  }
}
