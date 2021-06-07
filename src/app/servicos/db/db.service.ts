import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  public _storage:Storage;
  constructor(private storage: Storage) {
      this.iniciar(); 
    }
    async iniciar() {
      const storage = await this.storage.create();
    }
 
    public enviar(key: string, value: any) {
      this.storage.set(key, value);
    }
    async receber(key: string) {
      return await this.storage.get(key);
    }

    public remover(key: string) {
      this.storage.remove(key);
    }
}
