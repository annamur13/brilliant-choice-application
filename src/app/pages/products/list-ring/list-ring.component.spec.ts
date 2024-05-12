import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRing } from './list-ring.component';

describe('ListRing', () => {
  let component: ListRing;
  let fixture: ComponentFixture<ListRing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListRing]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListRing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
