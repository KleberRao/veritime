import { Injectable } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DbService } from '../db/db.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  API_CONFIG = {
    "API_URL":"https://veritime.com.br/veritime3/api",
    "API_URL_SANDBOX": "https://veritime.com.br/veritime3_teste/api"
  }

  atendimentos:any = [];
  constructor(private router: Router,private route: ActivatedRoute,private http:HttpClient,private db: DbService) {
    this.sincronizar();

  }
  
  public sincronizar(){
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaXNzIjoidmVyaXRpbWUuY29tLmJyIiwiX3JhbmRvbSI6ImY4MjQyYzI4ZWUwM2E4NDI2YWFjZTc3MmYzNTA5NTIwIiwiaWR1c3VhcmlvIjoiNDE4MCJ9.Ayl8j4FGE-pkS-tdPK_l4XKnET3L-GtFxRlr1v-Ruig'
        })
    };
    let postData = {
    }

    return this.http.post(this.API_CONFIG.API_URL+"/sincronizacao", postData, httpOptions)
      .subscribe(data => {
        console.log(data);
        this.db.enviar("atendimentos",data["atendimentos"]);
        this.db.remover("atendimentos");
       }, error => {
        console.log(error);
      });
  }

     obter_atendimentos(): Promise<any>{
        return new Promise((resolve,reject) =>{
            if(this.db.receber("atendimentos")){
              
              resolve(this.db.receber("atendimentos"));
            }else{
              reject('sem atendimentos');
            }
        });
    
 
  }

  
}
