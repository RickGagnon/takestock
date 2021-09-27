import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatcardsComponent } from './matcards.component';

describe('MatcardsComponent', () => {
  let component: MatcardsComponent;
  let fixture: ComponentFixture<MatcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
