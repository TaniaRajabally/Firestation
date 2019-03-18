import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InloginComponent } from './inlogin.component';

describe('InloginComponent', () => {
  let component: InloginComponent;
  let fixture: ComponentFixture<InloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
