import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoramento',
  templateUrl: './monitoramento.page.html',
  styleUrls: ['./monitoramento.page.scss'],
})
export class MonitoramentoPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  public redirecionarTelaReceita() { 
    this.router.navigateByUrl("receita");
  }

  public redirecionarTelaDespesa() { 
    this.router.navigateByUrl("despesa");
  }

}
