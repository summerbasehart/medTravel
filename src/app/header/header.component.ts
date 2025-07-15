import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import 'bootstrap/dist/css/bootstrap.min.css';


@Component({
  selector: 'header-home',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [ RouterLink
  ]
})


export class HeaderHomeComponent {
  visible = true;
  public isCollapsed = true;
}
