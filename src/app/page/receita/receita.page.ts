import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  public isSemTransacao = false;
  public isPagamentoPendente: boolean;

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
  ];

  public receitaList = [
    {
      "codigo": 1,
      "pessoaOrigemPagamento": "Mirante Tecnologia da Informação",
      "valorPagamento": "R$ 10.000,00",
      "categoriaTransacao": "Salário",
      "contaBancariaDestino": "Banco do Brasil",
      "dataPagamento": "10/09/2022",
    },
    {
      "codigo": 2,
      "pessoaOrigemPagamento": "Django Comunicações",
      "valorPagamento": "R$ 2.000,00",
      "categoriaTransacao": "Renda Extra",
      "contaBancariaDestino": "Banco Santader",
      "dataPagamento": "",
    },
    {
      "codigo": 3,
      "pessoaOrigemPagamento": "Priscilla da Silva Mariano",
      "valorPagamento": "R$ 1.000,00",
      "categoriaTransacao": "Empréstimo",
      "contaBancariaDestino": "Banco Digio",
      "dataPagamento": "22/09/2022",
    }
  ];

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

  public isVerificarPagamentoPendenteIcone(dataPagamentoReceita: any) {
    this.isPagamentoPendente = (dataPagamentoReceita == undefined || dataPagamentoReceita == null || dataPagamentoReceita == "");
    if(this.isPagamentoPendente) {
      return "pin-outline";
    } else {
      return "checkmark-outline";
    }
  }

  public isVerificarPagamentoPendenteTexto(dataPagamentoReceita: any) {
    this.isPagamentoPendente = (dataPagamentoReceita == undefined || dataPagamentoReceita == null || dataPagamentoReceita == "");
    if(this.isPagamentoPendente) {
      return "isTransacaoPendente";
    } else {
      return "isTransacaoPaga";
    }
  }

}
