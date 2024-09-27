import { Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { CreateAccountComponentComponent } from './create-account-component/create-account-component.component'

export const routes: Routes = [
    { path: 'login-component', component: LoginComponentComponent},
    { path: 'create-account-component', component: CreateAccountComponentComponent},
];
