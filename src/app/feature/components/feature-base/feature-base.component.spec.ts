import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureBaseComponent } from './feature-base.component';

describe('FeatureBaseComponent', () => {
  let component: FeatureBaseComponent;
  let fixture: ComponentFixture<FeatureBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureBaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
