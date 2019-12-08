import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  IncrementarAction,
  DecrementarAction
} from "./contador/contador.actions";

interface AppState {
  contador: number;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public contador: number;

  constructor(private store: Store<AppState>) {
    this.store.select("contador").subscribe(contador => {
      this.contador = contador;
    });
  }

  public incrementar() {
    // this.contador++;
    // const accion: Action = {
    //   type: "INCREMENTAR"
    // };

    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  public decrementar() {
    // this.contador--;
    // const accion: Action = {
    //   type: "DECREMENTAR"
    // };

    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }
}
