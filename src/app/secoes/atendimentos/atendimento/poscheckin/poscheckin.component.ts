import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../../../servicos/api/api.service';
import { AtendimentosService } from '../../../../servicos/app/atendimentos.service';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-poscheckin',
  templateUrl: './poscheckin.component.html',
  styleUrls: ['./poscheckin.component.scss'],
})
export class PoscheckinComponent implements OnInit {

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

checkout(){
  this.router.navigateByUrl("/atendimento/checkout/"+this.atendimento.idatendimento);
}

}
