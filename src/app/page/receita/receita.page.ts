import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

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
  public totalTransacaoPaga = 0;
  public totalTransacaoPendente: number = 0;

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
      "pessoaOrigemPagamento": "Mirante Tecnologia",
      "valorPagamento": 5000,
      "categoriaTransacao": "Salário",
      "contaBancariaDestino": "Banco do Brasil",
      "dataPagamento": "10/09/2022",
    },
    {
      "codigo": 2,
      "pessoaOrigemPagamento": "Django Comunicações",
      "valorPagamento": 2000,
      "categoriaTransacao": "Renda Extra",
      "contaBancariaDestino": "Banco Santader",
      "dataPagamento": "",
    },
    {
      "codigo": 3,
      "pessoaOrigemPagamento": "Priscilla da Silva Mariano",
      "valorPagamento": 1000,
      "categoriaTransacao": "Empréstimo",
      "contaBancariaDestino": "Banco Digio",
      "dataPagamento": "22/09/2022",
    }
  ];

  constructor(
    private alertController: AlertController
  ) { }

  ngOnInit() { 
    this.nomeMes = this.mesAnoList[8].nome;
    this.recuperarNumeroMesCorrente();
    this.calcularTotalValorTransacoesPagasPendentes();
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

  public async recuperarMesPosterior(indice: number) {
    var indice = this.numeroMesCorrente++;
    if(indice+1 >= 0) {
      return this.nomeMes = this.mesAnoList[indice+1].nome;
    }
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

  public calcularTotalValorTransacoesPagasPendentes() {
    this.receitaList.filter((response) => {
      if(response.dataPagamento == '') {
        this.totalTransacaoPendente += response.valorPagamento;
      }
      if(response.dataPagamento != '') {
        this.totalTransacaoPaga += response.valorPagamento;
      }
    });
  }

}
