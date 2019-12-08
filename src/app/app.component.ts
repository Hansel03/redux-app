import { Component } from "@angular/core";
import { Store, Action } from "@ngrx/store";

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
    this.store.subscribe(state => {
      this.contador = state.contador;
    });
  }

  public incrementar() {
    // this.contador++;
    const accion: Action = {
      type: "INCREMENTAR"
    };
    this.store.dispatch(accion);
  }

  public decrementar() {
    // this.contador--;
    const accion: Action = {
      type: "DECREMENTAR"
    };
    this.store.dispatch(accion);
  }
}
