import { Component, OnInit } from '@angular/core';  
import { IpServiceService } from './ip.service';

@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']  
})  
export class AppComponent implements OnInit {  
  constructor(private ip:IpServiceService){}  
  title = 'DemoApp';  
  ipAddress!:string;  
ngOnInit()  
  {  
    this.getIP();  
  }  
  getIP()  
  {  
    this.ip.getIPAddress().subscribe((res:any)=>{  
      this.ipAddress=res.ip;  
    });  
  }  
} 