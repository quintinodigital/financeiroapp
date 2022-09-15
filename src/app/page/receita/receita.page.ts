import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receita',
  templateUrl: './receita.page.html',
  styleUrls: ['./receita.page.scss'],
})
export class ReceitaPage implements OnInit {

  public isSemTransacao = true;

  constructor() { }

  ngOnInit() { }

}
