import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChain } from './add-chain.component';

describe('AddChain', () => {
  let component: AddChain;
  let fixture: ComponentFixture<AddChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddChain]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddChain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
