import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RedirecionadorService {

  constructor() { }

  public redirecionarTelaAnterior() {
    return window.history.back();
  }
  
}
