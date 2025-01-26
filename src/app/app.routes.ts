import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

export const routes: Routes = [
    { path: 'auth', component: RegistrationPageComponent },
    { path: '', component: RegistrationPageComponent },
    { path: 'main', component: MainPageComponent }, // Страница глав
    { path: '**', redirectTo: 'auth' } // Перенаправление на логин для несуществующих маршрутов
];
