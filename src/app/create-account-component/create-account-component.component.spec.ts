import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAccountComponentComponent } from './create-account-component.component';

describe('CreateAccountComponentComponent', () => {
  let component: CreateAccountComponentComponent;
  let fixture: ComponentFixture<CreateAccountComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAccountComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAccountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
