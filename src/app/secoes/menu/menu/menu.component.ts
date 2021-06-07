import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  divAdicionar:boolean = false;
  divRoot:boolean = false;
  constructor(private router: Router,private nav:NavController) {
  
    if(this.router.getCurrentNavigation().id == 1){
      this.divRoot = true;
    }
   }

  ngOnInit() {}

  private irAte(pagina:string){
    let pagina_s = "/criar/"+pagina;
    this.router.navigate([pagina_s]);
    
  }
  private menu(pagina:string){
    let pagina_s = "/"+pagina;
    this.router.navigate([pagina_s]);
    
  }

  abrirAdicionar(){
    if(this.divAdicionar == true){
      this.divAdicionar = false;
    }else{
      this.divAdicionar = true;
    }
  }
} 
