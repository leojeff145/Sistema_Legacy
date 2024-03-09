import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarHoriComponent } from './nav-bar-hori.component';

describe('NavBarHoriComponent', () => {
  let component: NavBarHoriComponent;
  let fixture: ComponentFixture<NavBarHoriComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarHoriComponent]
    });
    fixture = TestBed.createComponent(NavBarHoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
