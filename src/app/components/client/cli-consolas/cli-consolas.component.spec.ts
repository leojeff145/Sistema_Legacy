import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliConsolasComponent } from './cli-consolas.component';

describe('CliConsolasComponent', () => {
  let component: CliConsolasComponent;
  let fixture: ComponentFixture<CliConsolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CliConsolasComponent]
    });
    fixture = TestBed.createComponent(CliConsolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
