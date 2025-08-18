import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'about-us', component: AboutUs}
];
