import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  clicked = true;
  title = 'Jane learning Angular!!'

  handleClick() {
    this.clicked = true;
  }

  favframework: string = '';
  // directive- a component without html or css. attaches to a host element

  boat = {
    name:"Jett",
    year: 2022,
    country:"Uganda"
  };
}
