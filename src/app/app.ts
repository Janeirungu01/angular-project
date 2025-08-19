import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/about-us">About Us</a>
    </nav>
    <router-outlet />
  `,

  imports: [RouterLink, RouterOutlet],
  styleUrl: './app.css'
})

export class App {

}


