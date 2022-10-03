import { Component, OnInit } from '@angular/core';
import { RedirecionadorService } from './../../../service/redirecionador.service';

@Component({
  selector: 'app-receita-cadastrar',
  templateUrl: './receita-cadastrar.page.html',
  styleUrls: ['./receita-cadastrar.page.scss'],
})
export class ReceitaCadastrarPage implements OnInit {

  

  constructor(
    private redirecionadorService: RedirecionadorService
  ) { }

  ngOnInit() { }

  public redirecionarTelaAnterior() {
    return this.redirecionadorService.redirecionarTelaAnterior();
  }

}
