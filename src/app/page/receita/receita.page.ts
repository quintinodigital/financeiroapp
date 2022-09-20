import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  public isSemTransacao = false;
  public isPagamentoPendente = false;

  public nomeMes: String = "";
  public numeroMesCorrente: any = 0;

  public mesAnoList = [
    { nome: "Janeiro" },
    { nome: "Fevereiro" },
    { nome: "Março" },
    { nome: "Abril" },
    { nome: "Maio" },
    { nome: "Junho" },
    { nome: "Julho" },
    { nome: "Agosto" },
    { nome: "Setembro" },
    { nome: "Outubro" },
    { nome: "Novembro" },
    { nome: "Dezembro" }
  ]

  constructor() { }

  ngOnInit() { 
    this.nomeMes = this.mesAnoList[8].nome;
    this.recuperarNumeroMesCorrente();
  }

  private recuperarNumeroMesCorrente() {
    var dataAtual = new Date();
    this.numeroMesCorrente = dataAtual.getMonth();
  }

  public recuperarMesAnterior() {
    var indice = this.numeroMesCorrente--;
    if(indice-1 >= 0) {
      return this.nomeMes = this.mesAnoList[indice-1].nome;
    }
  }

  public recuperarMesPosterior(indice: number) { 
    return this.nomeMes = this.mesAnoList[this.numeroMesCorrente+indice].nome
  }

  public isVerificarPagamentoPendente() {
    if(this.isPagamentoPendente) {
      return "pin-outline";
    } else {
      return "checkmark-outline";
    }
  }

}
