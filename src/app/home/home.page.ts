import { Component } from '@angular/core';

import { HttpClient, HttpResponse, HttpHeaders, HttpParams  } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  private cte = {
    DEBUG: false,
    VERSAO: 297,
    URL_API: 'https://veritime.com.br/veritime3/api',
    GCM_SENDER_ID: '1054711205084',
    TIMEOUT_HTTP: 30000,
    TIMEOUT_GEOLOCALIZACAO: 10000,
    TIMEOUT_GEOLOCALIZACAO_BACKGROUND: 120000,
    TIMEOUT_SINC: 15000,
    TAMANHO_FILA: 10,
    TAMANHO_FILA_FOTO: 1
}


  constructor(private http: HttpClient) {
 
}
}