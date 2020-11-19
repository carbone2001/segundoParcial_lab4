import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InscripcionAdminComponent } from './inscripcion-admin.component';

describe('InscripcionAdminComponent', () => {
  let component: InscripcionAdminComponent;
  let fixture: ComponentFixture<InscripcionAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscripcionAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InscripcionAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
