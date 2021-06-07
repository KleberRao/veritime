import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../servicos/api/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrls: ['./listagem-atendimentos.component.scss'],
})
export class ListagemAtendimentosComponent implements OnInit {
  data_atual;
  divlistarAtendimentos:boolean = false;
  listarData:any = "hoje";
  filtragem:string = "todos";
  atendimentos:any = [];
  constructor(private router: Router, private api:ApiService){
    this.data_atual = new Date();
    this.listarAtendimentos();
  }
  public irPagina(pagina:string){
    this.router.navigate(['/'+pagina])
  }

  ngOnInit() {}

   public clickListarAtendimentos(){
      if(this.divlistarAtendimentos == true){
        this.divlistarAtendimentos = false;
      }else{
        this.divlistarAtendimentos = true;
      }
  }

  
  private listarAtendimentos(){
    this.api.obter_atendimentos().then((atendimentos)=>{
      this.atendimentos = atendimentos;
    })
     
  }

  private filtrarAtendimentos(tipo:string = null){
    var filtragem = _.filter(this.atendimentos,{'status_atendimento': tipo});
    return filtragem.length;
  }
}
