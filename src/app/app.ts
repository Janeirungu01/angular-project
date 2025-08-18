import { Component } from '@angular/core';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [Home],
  styleUrl: './app.css'
})
export class App {
   name: string = 'Jane Doe';
   today: Date = new Date();

  //  changeTitle() {
  //   document.querySelector('#title').innerHTML= "Touched the DOM";
  //  }
}


