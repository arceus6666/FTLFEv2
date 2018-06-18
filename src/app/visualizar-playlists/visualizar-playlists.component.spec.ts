import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarPlaylistsComponent } from './visualizar-playlists.component';

describe('VisualizarPlaylistsComponent', () => {
  let component: VisualizarPlaylistsComponent;
  let fixture: ComponentFixture<VisualizarPlaylistsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarPlaylistsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarPlaylistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
