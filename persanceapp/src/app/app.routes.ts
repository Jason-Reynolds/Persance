import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'expenses',
        pathMatch: 'full'
    },
    {
        path: 'expenses',
        loadChildren: () => import('./routes/expenses/expenses.route').then(m => m.EXPENSES_ROUTES) 
    }
];
