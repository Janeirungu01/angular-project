import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {path: '', 
        title: 'application home page',component: Home},
    {path: 'about-us', component: AboutUs}
];
