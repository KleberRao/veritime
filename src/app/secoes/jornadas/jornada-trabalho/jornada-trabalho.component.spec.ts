import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JornadaTrabalhoComponent } from './jornada-trabalho.component';

describe('JornadaTrabalhoComponent', () => {
  let component: JornadaTrabalhoComponent;
  let fixture: ComponentFixture<JornadaTrabalhoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ JornadaTrabalhoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JornadaTrabalhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
