import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTablaFiltrosComponent } from './c-tabla-filtros.component';

describe('CTablaFiltrosComponent', () => {
  let component: CTablaFiltrosComponent;
  let fixture: ComponentFixture<CTablaFiltrosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTablaFiltrosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTablaFiltrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
