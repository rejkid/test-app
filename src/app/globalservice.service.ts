import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalserviceService {

  constructor(private http: HttpClient) { 
    console.log("GlobalserviceService created");
  }
  print(value: string) {
    console.log(value);
  }
}
