import {Component, inject, signal} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ProfileService} from '../../service/profile-service';
import {Profile} from '../../model/models';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

  profileService = inject(ProfileService);
  profileInfo: Profile;

  isMobileMenuOpen = false;

  constructor() {
    this.profileInfo = this.profileService.getProfile();
  }


  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  protected readonly environment = environment;
}
