import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../servicos/api/api.service';
import { AtendimentosService } from '../../../../servicos/app/atendimentos.service';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-checkin',
  templateUrl: './checkin.component.html',
  styleUrls: ['./checkin.component.scss'],
})
export class CheckinComponent implements OnInit {

  atendimento:any;
  constructor(private router: Router,private route: ActivatedRoute,private app:AtendimentosService,private api:ApiService) {
  
  this.listarAtendimentos();
}

ngOnInit() {
 
}

listarAtendimentos() {
  this.route.params.subscribe((parametros) =>{
    if(parametros["idatendimento"] !== undefined){
      this.app.obterAtendimentos(parametros["idatendimento"]).then((atendimento) =>{

          this.atendimento = atendimento[0];
          this.atendimento.categorias = this.atendimento.categorias.split("|");
          console.log(this.atendimento);
        
      });
     
    }
  });
}

cancelarAtendimento(){
  this.router.navigate(["/atendimento/cancelamento/"+this.atendimento.idatendimento]);
}

checkin(){
  this.router.navigateByUrl("/atendimento/checkout/"+this.atendimento.idatendimento);
}
}
