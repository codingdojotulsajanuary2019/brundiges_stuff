import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WtonComponent } from './wton.component';

describe('WtonComponent', () => {
  let component: WtonComponent;
  let fixture: ComponentFixture<WtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
