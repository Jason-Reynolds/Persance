import { Route } from "@angular/router";
import { ExpenseFormComponent } from "./expense-form/expense-form.component";
import { ExpenseListComponent } from "./expense-list/expense-list.component";

export const EXPENSES_ROUTES: Route[] = [
    {
        path: '',
        component: ExpenseListComponent
    },
    {
        path: 'add',
        component: ExpenseFormComponent
    }
]