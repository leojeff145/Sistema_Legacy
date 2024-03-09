import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliEventosComponent } from './cli-eventos.component';

describe('CliEventosComponent', () => {
  let component: CliEventosComponent;
  let fixture: ComponentFixture<CliEventosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliEventosComponent]
    });
    fixture = TestBed.createComponent(CliEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
