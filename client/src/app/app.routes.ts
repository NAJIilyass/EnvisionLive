import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StreamComponent } from './components/stream/stream.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'stream/:id', component: StreamComponent}
];
