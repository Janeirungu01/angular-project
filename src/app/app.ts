import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greetings',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   name: string = 'Jane Doe';
   today: Date = new Date();
}


