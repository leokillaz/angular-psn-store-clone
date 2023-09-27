import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalheJogoComponent } from './detalhe-jogo.component';

describe('DetalheJogoComponent', () => {
  let component: DetalheJogoComponent;
  let fixture: ComponentFixture<DetalheJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalheJogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalheJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
