import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliNavbarComponent } from './cli-navbar.component';

describe('CliNavbarComponent', () => {
  let component: CliNavbarComponent;
  let fixture: ComponentFixture<CliNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliNavbarComponent]
    });
    fixture = TestBed.createComponent(CliNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
