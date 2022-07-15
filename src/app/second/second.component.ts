import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(private globalserviceService : GlobalserviceService) { }

  ngOnInit(): void {
    this.globalserviceService.print("hello");
  }

}
