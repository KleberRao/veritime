import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
})
export class ClienteComponent implements OnInit {

  constructor(private nav:NavController) { }

  ngOnInit() {}
  private voltarAtras(){
    this.nav.back();
    }
}
