import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizacionResultadosComponent } from './visualizacion-resultados.component';

describe('VisualizacionResultadosComponent', () => {
  let component: VisualizacionResultadosComponent;
  let fixture: ComponentFixture<VisualizacionResultadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizacionResultadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizacionResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
