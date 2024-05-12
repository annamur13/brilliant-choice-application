import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRing } from './add-ring.component';

describe('AddRing', () => {
  let component: AddRing;
  let fixture: ComponentFixture<AddRing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRing]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddRing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
