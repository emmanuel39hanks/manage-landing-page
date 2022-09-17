import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nav: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  handleNav() {
    this.nav = !this.nav;
  }
}
