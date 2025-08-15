import { Routes } from '@angular/router';
import { App } from './app';
import { AboutUs } from './about-us/about-us';

export const routes: Routes = [
    {path: '', component: App},
    {path: 'about-us', component: AboutUs}
];
