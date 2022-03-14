import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceDetectorComponent } from './device-detector.component';

describe('DeviceDetectorComponent', () => {
  let component: DeviceDetectorComponent;
  let fixture: ComponentFixture<DeviceDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeviceDetectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
