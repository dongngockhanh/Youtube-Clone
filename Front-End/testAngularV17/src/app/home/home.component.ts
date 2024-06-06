import { Component } from '@angular/core';
import { NavComponent } from "../nav/nav.component";
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [NavComponent,RouterModule]
})
export class HomeComponent {
  constructor(private router: Router) { }
}
