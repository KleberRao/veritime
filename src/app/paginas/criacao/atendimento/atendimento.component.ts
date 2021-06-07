import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router,ActivatedRoute  } from '@angular/router';
@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss'],
})
export class CriarAtendimentoComponent implements OnInit {

  constructor(private nav:NavController,private router: Router,private route: ActivatedRoute) {
  }

  ngOnInit() {}
  private voltarAtras(){
    this.nav.back();
    }
  irAte(pagina:string){
    this.router.navigateByUrl(pagina);
  }
}
