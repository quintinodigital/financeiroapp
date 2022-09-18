import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  public isSemTransacao = true;

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
    var indice = this.numeroMesCorrente;
    if(indice === this.numeroMesCorrente) {
      this.numeroMesCorrente--;
    }
    if(indice >= 0 && indice) {
      console.log(indice);
      return this.nomeMes = this.mesAnoList[indice].nome;
    }
  }

  public recuperarMesPosterior(indice: number) { 
    return this.nomeMes = this.mesAnoList[this.numeroMesCorrente+indice].nome
  }

}
