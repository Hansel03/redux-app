import { Action } from "@ngrx/store";
import {
  INCREMENTAR,
  DECREMENTAR,
  MULTIPLICAR,
  DIVIDIR
} from "./contador.actions";

export function contadorReducer(state: number = 10, action: Action) {
  switch (action.type) {
    case INCREMENTAR:
      return state + 1;

    case DECREMENTAR:
      return state - 1;

    case MULTIPLICAR:
      return state * 2;

    case DIVIDIR:
      return state / 2;

    default:
      return state;
  }
}
