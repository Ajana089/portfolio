import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
image:String="assets/images/photo.jpg"
backimg:String="assets/images/bluebk.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
