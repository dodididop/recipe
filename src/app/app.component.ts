import { Component, OnInit } from '@angular/core';  
import { AuthService } from './auth/auth.service';
import { IpServiceService } from './ip.service';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements OnInit {  
  constructor(private ip:IpServiceService,private authService:AuthService){}   
  ipAddress:string;  
  ngOnInit()  
  {  
    this.getIP();
    this.authService.autoLogin()
  }  
  getIP()  
  {  
    this.ip.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
    });  
  }  
} 