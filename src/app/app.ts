import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
   name: string = 'Jane Doe';
   today: Date = new Date();
 
}


