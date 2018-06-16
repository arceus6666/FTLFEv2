import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarCancionComponent } from './mostrar-cancion.component';

describe('MostrarCancionComponent', () => {
  let component: MostrarCancionComponent;
  let fixture: ComponentFixture<MostrarCancionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarCancionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarCancionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
