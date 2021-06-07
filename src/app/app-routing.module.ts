import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './paginas/lista22/lista.component';
import { AtendimentosComponent } from './paginas/minha_lista/atendimentos/atendimentos.component';
import { AtendimentoComponent } from './paginas/atendimentos/atendimento/atendimento.component';
import { CriarAtendimentoComponent } from './paginas/criacao/atendimento/atendimento.component';
import { ClienteComponent } from './paginas/criacao/cliente/cliente.component';
import { JornadaComponent } from './paginas/jornada/jornada.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'minha_lista',
    component: AtendimentosComponent
  },
  {
    path: 'minha_lista/:filtragem',
    component: AtendimentosComponent
  },
  {
    path: 'minha_lista/:filtragem/:ordernar',
    component: AtendimentosComponent
  },
  {
    path: 'atendimento/:idatendimento',
    component: AtendimentoComponent
  },
  {
    path: 'atendimento/:filtragem/:idatendimento',
    component: AtendimentoComponent
  },
  {
    path: 'criar/cliente',
    component: ClienteComponent
  },
  {
    path: 'criar/atendimento',
    component: CriarAtendimentoComponent
  },
  {
    path: 'jornada',
    component: JornadaComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
