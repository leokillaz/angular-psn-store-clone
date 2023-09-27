import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeJogosComponent } from './grade-jogos.component';

describe('GradeJogosComponent', () => {
  let component: GradeJogosComponent;
  let fixture: ComponentFixture<GradeJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GradeJogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GradeJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
