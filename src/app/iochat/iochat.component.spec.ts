import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IochatComponent } from './iochat.component';

describe('IochatComponent', () => {
  let component: IochatComponent;
  let fixture: ComponentFixture<IochatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IochatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IochatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
