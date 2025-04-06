import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/layout/not-found/not-found.component';
import { NewComponent } from './components/furnitures/new/new.component';
import { ListComponent } from './components/furnitures/list/list.component';

export const routes: Routes = [
    { path: 'list', component: ListComponent },
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'new', component: NewComponent },
    { path: '**', component: NotFoundComponent }
];
