import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveLoginPage } from './reactive-login.page';

describe('ReactiveLoginPage', () => {
  let component: ReactiveLoginPage;
  let fixture: ComponentFixture<ReactiveLoginPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
