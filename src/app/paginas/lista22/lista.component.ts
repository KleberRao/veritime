import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../../secoes/components/components.module';
import { Router } from '@angular/router';
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  divBuscar:boolean = false;
  constructor(private router: Router){}

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
}
