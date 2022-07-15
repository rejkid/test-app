import { Component, OnInit } from '@angular/core';
import { GlobalserviceService } from '../globalservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private globalserviceService : GlobalserviceService) { }

  ngOnInit(): void {
    this.globalserviceService.print("hello");
  }

}
