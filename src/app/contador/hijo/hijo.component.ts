import { Component, OnInit } from "@angular/core";
import { AppState } from "../../app.reducers";
import { Store } from "@ngrx/store";
import { MultiplicarAction, DividirAction } from "../contador.actions";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styles: [
    `
      button {
        margin: 10px;
      }
    `
  ]
})
export class HijoComponent implements OnInit {
  contador: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select("contador").subscribe(contador => {
      this.contador = contador;
    });
  }

  public multiplicar() {
    const accion = new MultiplicarAction(2);
    this.store.dispatch(accion);
  }

  public dividir() {
    const accion = new DividirAction(2);
    this.store.dispatch(accion);
  }

  public resetNieto(nuevoContador) {
    this.contador = nuevoContador;
    // this.cambioContador.emit(this.contador);
  }
}
