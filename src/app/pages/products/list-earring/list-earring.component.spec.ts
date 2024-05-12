import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEarring } from './list-earring.component';

describe('ListEarring', () => {
  let component: ListEarring;
  let fixture: ComponentFixture<ListEarring>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListEarring]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListEarring);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
