import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChain } from './list-chain.component';

describe('ListChain', () => {
  let component: ListChain;
  let fixture: ComponentFixture<ListChain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChain]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListChain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
