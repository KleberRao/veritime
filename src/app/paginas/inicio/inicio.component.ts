import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../secoes/components/components.module';
import { ListagemAtendimentosComponent } from '../../secoes/listagem-atendimentos/listagem-atendimentos';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
