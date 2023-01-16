import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'key-lease-front';

  constructor(
    private http: HttpClient
  ) {
  }

  getHelloWorld(){
    return this.http.get(`${environment.apiUrl}/helloworld`)
  }

  ngOnInit(): void {
    this.getHelloWorld().subscribe((data)=> console.log(data))
  }
}
