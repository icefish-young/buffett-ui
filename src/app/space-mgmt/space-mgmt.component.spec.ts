import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceMgmtComponent } from './space-mgmt.component';

describe('SpaceMgmtComponent', () => {
  let component: SpaceMgmtComponent;
  let fixture: ComponentFixture<SpaceMgmtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceMgmtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
