import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationPageComponent } from './registration-page/registration-page.component';

@Component({
    selector: 'app-root',
    imports: [
        RouterOutlet,
        RegistrationPageComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'LogTheDay';
}
