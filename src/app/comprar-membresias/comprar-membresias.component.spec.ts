import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprarMembresiasComponent } from './comprar-membresias.component';

describe('ComprarMembresiasComponent', () => {
  let component: ComprarMembresiasComponent;
  let fixture: ComponentFixture<ComprarMembresiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComprarMembresiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprarMembresiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
