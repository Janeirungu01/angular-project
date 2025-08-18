import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  clicked = true;
  title = 'Jane learning Angular!!'

  handleClick() {
    this.clicked = true;
  }

  // directive- a component without html or css. attaches to a host element

  boat = {
    name:"Jett",
    year: 2022,
    country:"Uganda"
  };
}
