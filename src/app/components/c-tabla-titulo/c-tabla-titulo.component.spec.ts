import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CTablaTituloComponent } from './c-tabla-titulo.component';

describe('CTablaTituloComponent', () => {
  let component: CTablaTituloComponent;
  let fixture: ComponentFixture<CTablaTituloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CTablaTituloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CTablaTituloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
