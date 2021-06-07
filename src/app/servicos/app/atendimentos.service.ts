import { Injectable } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { ApiService } from '../../servicos/api/api.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class AtendimentosService {
  atendimentos:any = []; //Lista de atendimentos
  ordernar:string = "horario"; // Ordenar
  filtragem:string = null; // Filtragem de por status do atendimento
  constructor(private router:Router,private route: ActivatedRoute,private api:ApiService) {

   }
   /*
  public iniciarAtendimentos(filtragem:string = null,ordernar:string = null){
    this.route.params.subscribe(params => {
      if(ordernar !== null){
        if(ordernar == "horario"){
          this.ordernar == "horario";
        }else{
          this.ordernar == "distancia";
        }
      }

      if(filtragem !== null){
        this.filtragem = filtragem;
      }
  });
  }
*/

  public listarAtendimentos(filtragem:string = null,ordernar:string = null){ // Retorna um array com  os atendimentos podendo filtrar pelo status ou ordernar por horario e distância
    
    return this.api.obter_atendimentos().then((arrayAtendimentos)=>{
      console.log(arrayAtendimentos);

      this.atendimentos = [];
      for(i = 1;i <= 31;i++){ // Criar lista com dias do mês
        var key;
        key = i;
        
        this.atendimentos[key] = [];
      }
      
      for(var i = 0; i < arrayAtendimentos.length;i++){ //Enviar os atendimentos por dia
        arrayAtendimentos[i]["exibir"] = "false"; // Variavel para mostrar e ocultar um elemento
        var data = arrayAtendimentos[i].data_agendada;
        var pegarDia = data.split("-"); // Divide a variavel pra obter o dia
        var mes = pegarDia[1];
        var dia = pegarDia[2]; // Pegar apenas o dia
        if(dia < 10){
          dia = dia.replace("0","");
        }

        if(mes < 10){
          mes = mes.replace("0","");
        }
        if(arrayAtendimentos[i].categorias !== null){
          arrayAtendimentos[i].categorias = arrayAtendimentos[i].categorias.split("|");
        }
        var nova_data = new Date();
        if((nova_data.getMonth()+1).toString() == mes){

          this.route.params.subscribe((params) =>{
              if(filtragem !== null && arrayAtendimentos[i] !== null && arrayAtendimentos[i].status_atendimento !== undefined){
                if(arrayAtendimentos[i].status_atendimento == filtragem){
                   this.atendimentos[dia].push(arrayAtendimentos[i]); // Armazena no array Atendimentos os atendimentos desse dia
                }
              }else{
                this.atendimentos[dia].push(arrayAtendimentos[i]); // Armazena no array Atendimentos os atendimentos desse dia
              }
          });
        this.atendimentos[dia].exibir = "true";
        }
     
        

        this.route.params.subscribe((params) =>{
          if(ordernar !== null){
            if(ordernar == "horario"){
            this.atendimentos[dia].sort((a,b) =>{
              if (new Date(b.data_hora_agendada) > new Date(a.data_hora_agendada)){
                return -1;}
      
          if (new Date(b.data_hora_agendada) < new Date(a.data_hora_agendada)){
              return 1;
          }
          return 0;

            });
            
            this.atendimentos = this.atendimentos.reverse();
          }else{

              this.atendimentos[dia].sort((a,b) =>{
                if (new Date(b.data_hora_agendada) > new Date(a.data_hora_agendada)){
                return -1;
                }
            if (new Date(b.data_hora_agendada) < new Date(a.data_hora_agendada)){
                return 1;
            }
            
            return 0;
              });
            
              this.atendimentos = this.atendimentos.reverse();
          }
          
            
          }



      });
  

      }
      return this.atendimentos;
})
  }

  public obterAtendimentos(idatendimento:string){
    return this.api.obter_atendimentos().then((arrayAtendimentos)=>{
        var filtragem = _.filter(arrayAtendimentos,{ 'idatendimento': idatendimento });
        return filtragem;
    });
  }
}
