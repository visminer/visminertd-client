import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLeftSideComponent } from './menu-left-side.component';

describe('MenuLeftSideComponent', () => {
  let component: MenuLeftSideComponent;
  let fixture: ComponentFixture<MenuLeftSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLeftSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLeftSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
