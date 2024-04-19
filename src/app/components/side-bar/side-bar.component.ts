import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationEnd, ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  logout() {
    this.router.navigate(['login']);
  }

  isActive(url: string): boolean {
    return this.router.url === url;
  }
  
 
}
