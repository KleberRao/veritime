import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListagemAtendimentosComponent } from './listagem-atendimentos.component';

describe('ListagemAtendimentosComponent', () => {
  let component: ListagemAtendimentosComponent;
  let fixture: ComponentFixture<ListagemAtendimentosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListagemAtendimentosComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListagemAtendimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
