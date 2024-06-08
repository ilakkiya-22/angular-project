import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServivesComponent } from './servives.component';

describe('ServivesComponent', () => {
  let component: ServivesComponent;
  let fixture: ComponentFixture<ServivesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ServivesComponent]
    });
    fixture = TestBed.createComponent(ServivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
