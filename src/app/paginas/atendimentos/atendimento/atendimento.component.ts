import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../../servicos/api/api.service';
import { AtendimentosService } from '../../../servicos/app/atendimentos.service';
import { Router,ActivatedRoute, } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class AtendimentoComponent implements OnInit {
  atendimento:any;
  checkout:boolean = false;
  cancelamento:boolean = false;
  constructor(private router: Router,private route: ActivatedRoute,private app:AtendimentosService,private api:ApiService,private nav:NavController) { 
    this.listarAtendimentos();
  }

  ngOnInit() {
   
  }

  listarAtendimentos() {
    this.route.params.subscribe((parametros) =>{
      if(parametros["idatendimento"] !== undefined){
        this.app.obterAtendimentos(parametros["idatendimento"]).then((atendimento) =>{

            this.atendimento = atendimento[0];
            console.log(this.atendimento);
          
        });
       
      }

      console.log(parametros);
      if(parametros["filtragem"] !== undefined ){
        if(parametros["filtragem"] == "checkout" ){
          this.checkout = true;
      }else{
        this.checkout = false;
      }
      if(parametros["filtragem"] == "cancelamento" ){
        this.cancelamento = true;
    }else{
      this.cancelamento = false;
    }
      }

      
     
    });
  }


  private voltarAtras(){
  this.nav.back();
  }
}
