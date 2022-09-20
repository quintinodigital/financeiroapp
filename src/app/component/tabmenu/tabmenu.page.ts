import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-tabmenu',
  templateUrl: './tabmenu.page.html',
  styleUrls: ['./tabmenu.page.scss'],
})
export class TabmenuPage implements OnInit {

  @ViewChild('tabs', { static: false }) tabs: IonTabs;

  public isButtonMonitoramento: boolean = false;
  public isButtonReceita: boolean = false;
  public isButtonDespesa: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() { }

  setCurrentTab() {
    if(this.tabs.getSelected() == 'monitoramento') {
      this.isButtonReceita = false;
      this.isButtonDespesa = false;
      this.isButtonMonitoramento = true;
    }
    if(this.tabs.getSelected() == 'receita') {
      this.isButtonReceita = true;
      this.isButtonDespesa = false;
      this.isButtonMonitoramento = false;
    }
    if(this.tabs.getSelected() == 'despesa') {
      this.isButtonReceita = false;
      this.isButtonDespesa = true;
      this.isButtonMonitoramento = false;
    }
  }

  public redirecionarTelaReceitaCadastrar() {
    return this.router.navigateByUrl("receita-cadastrar");
  }

  public redirecionarTelaDespesaCadastrar() {
    return this.router.navigateByUrl("despesa-cadastrar");
  }

}
