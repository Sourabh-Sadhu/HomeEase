import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home-ease/home-ease.module').then(m => m.HomeEaseModule)
    },

];