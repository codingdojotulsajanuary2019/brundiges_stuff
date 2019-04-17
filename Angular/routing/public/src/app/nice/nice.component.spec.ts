import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NiceComponent } from './nice.component';

describe('NiceComponent', () => {
  let component: NiceComponent;
  let fixture: ComponentFixture<NiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
