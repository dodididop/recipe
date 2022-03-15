import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { DeviceDetectorService, DeviceInfo } from 'ngx-device-detector';

@Component({
  selector: 'app-device-detector',
  templateUrl: './device-detector.component.html',
  styleUrls: ['./device-detector.component.css']
})
export class DeviceDetectorComponent implements OnInit {
  deviceInfo!: DeviceInfo;
  
  constructor(private deviceService:DeviceDetectorService) {}

  ngOnInit(): void {
    this.deviceInfo = this.deviceService.getDeviceInfo()
  }
  
}
