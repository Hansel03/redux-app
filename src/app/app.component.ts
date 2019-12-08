import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  public contador: number;

  constructor() {
    this.contador = 10;
  }

  public incrementar() {
    this.contador++;
  }

  public decrementar() {
    this.contador--;
  }
}
