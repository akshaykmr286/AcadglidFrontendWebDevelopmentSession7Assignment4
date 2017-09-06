import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ass4Component } from './ass4.component';

describe('Ass4Component', () => {
  let component: Ass4Component;
  let fixture: ComponentFixture<Ass4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ass4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ass4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
