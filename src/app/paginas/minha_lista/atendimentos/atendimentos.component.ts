import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../../secoes/components/components.module';
import { Router,ActivatedRoute  } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../servicos/api/api.service';
import { AtendimentosService } from '../../../servicos/app/atendimentos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-atendimentos',
  templateUrl: './atendimentos.component.html',
  styleUrls: ['./atendimentos.component.scss'],
})
export class AtendimentosComponent implements OnInit {
  filtragem:string = null;
  ordernar:string = "horario";
  divBuscar:boolean = false;
  atendimentos:any = [];
  buscarInput:string = "";
  constructor(private router: Router,private route: ActivatedRoute,private http:HttpClient,private api:ApiService,private app:AtendimentosService,private nav:NavController){

    this.app.listarAtendimentos();
   
  }

  ngOnInit() {}
  private buscar(){
    if(this.divBuscar == true){
      this.divBuscar = false;
    }else{  
      this.divBuscar = true;
    }
  }

  public irPage(pagina:string){
    this.router.navigate(['/'+pagina])
  }
  private voltarAtras(){
    this.nav.back();
    }
  private listarAtendimentos(){
   /* this.api.obter_atendimentos().then((atendimentos)=>{
      this.atendimentos = atendimentos;
    })
  */
  }

  private ordernar_atendimentos(ordernar:string){
    this.ordernar = ordernar;

    if(this.filtragem !== null){

      this.router.navigate(['/minha_lista/'+this.filtragem+"/"+this.ordernar]);
    }else{
      this.router.navigate(['/minha_lista/']);
    }

  }

  public buscando(event){
    console.log(event);
  }
}
