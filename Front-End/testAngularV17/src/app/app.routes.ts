import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WatchComponent } from './watch/watch.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path:'watch',component:WatchComponent}
];
