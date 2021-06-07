import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemAtendimentosComponent } from '../atendimentos/listagem-atendimentos/listagem-atendimentos.component';
import { JornadaTrabalhoComponent } from '../jornadas/jornada-trabalho/jornada-trabalho.component';
import { JornadaComponent } from '../../paginas/jornada/jornada.component';
import { ListarAtendimentosComponent } from '../../secoes/minha_lista/listar-atendimentos/listar-atendimentos.component';
import { CheckinComponent } from '../../secoes/atendimentos/atendimento/checkin/checkin.component';
import { CheckoutComponent } from '../../secoes/atendimentos/atendimento/checkout/checkout.component';
import { PoscheckinComponent } from '../../secoes/atendimentos/atendimento/poscheckin/poscheckin.component';
import { CancelamentoComponent } from '../../secoes/atendimentos/atendimento/cancelamento/cancelamento.component';
import { MenuComponent } from '../menu/menu/menu.component';
import { AtendimentosComponent } from '../../paginas/minha_lista/atendimentos/atendimentos.component';
import { AtendimentoComponent } from '../../paginas/atendimentos/atendimento/atendimento.component';
import { ClienteComponent } from '../../paginas/criacao/cliente/cliente.component';
import { CriarAtendimentoComponent } from '../../paginas/criacao/atendimento/atendimento.component';
const PAGES = [
  ListagemAtendimentosComponent,
  JornadaTrabalhoComponent,
  JornadaComponent,
  AtendimentoComponent,
  CheckinComponent,
  PoscheckinComponent,
  CheckoutComponent,
  CancelamentoComponent,
  CriarAtendimentoComponent,
  ClienteComponent,
  ListarAtendimentosComponent, // Listagem de atendimentos na tela Minha Lista exibindo os atendimentos ordenados
  AtendimentosComponent,
  MenuComponent
]

@NgModule({
  declarations: PAGES,
  exports: PAGES,
  imports: [
    CommonModule
  ]
})
export class ComponentsModule {

 }
