import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEarring } from './add-earring.component';

describe('AddEarring', () => {
  let component: AddEarring;
  let fixture: ComponentFixture<AddEarring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddEarring]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddEarring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
