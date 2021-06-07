import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from '../../../servicos/api/api.service';
import { Animation, AnimationController } from '@ionic/angular';
import { AtendimentosService } from '../../../servicos/app/atendimentos.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-listar-atendimentos',
  templateUrl: './listar-atendimentos.component.html',
  styleUrls: ['./listar-atendimentos.component.scss'],
})
export class ListarAtendimentosComponent implements OnInit {

  filtragem:string = "todos";
  divBuscar:boolean = false;
  keys:any = [];
  atendimentos:any = [];
  
  anim:Animation;

  divCollapse:boolean = false;
  constructor(private router: Router,private route: ActivatedRoute,private http:HttpClient,private api:ApiService,private animationCtrl: AnimationController,private app:AtendimentosService){

  }

  ngOnInit() {
    this.route.params.subscribe((parametros) => {
      var filtragem = null;
      var ordernar = null;
      if(parametros["filtragem"] !== undefined){
          filtragem = parametros["filtragem"];
      }
      if(parametros["ordernar"] !== undefined){
        ordernar = parametros["ordernar"];
      }
      this.app.listarAtendimentos(filtragem,ordernar).then((atendimentos) => {
        this.atendimentos = atendimentos;
      });
    })
  }


  

  public toggleAtendimento(dia,index){
    if(this.atendimentos[dia][index].exibir == "true"){
      this.atendimentos[dia][index].exibir = "false";
    }else{
      this.atendimentos[dia][index].exibir = "true";
    }
  }
  public toggleAtendimentoDia(index){
    if(this.atendimentos[index].exibir == "true"){
      this.atendimentos[index].exibir = "false";
    }else{
      this.atendimentos[index].exibir = "true";
    }
  }

  public obterData(data:string){
    var semana = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
    var week = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    for(var i = 0;i < week.length;i++){
      if(data == week[i]){
        return semana[i];
      }
    }
    
  }

  public verAtendimento(idatendimento:string){
    
    this.router.navigate(['/atendimento/'+idatendimento]);
  }
}
