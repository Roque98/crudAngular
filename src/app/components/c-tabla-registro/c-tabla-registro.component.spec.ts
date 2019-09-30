import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTablaRegistroComponent } from './c-tabla-registro.component';

describe('CTablaRegistroComponent', () => {
  let component: CTablaRegistroComponent;
  let fixture: ComponentFixture<CTablaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTablaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTablaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
