import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule, 
    RouterLink, 
    RouterLinkActive, 
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatListModule, 
    LucideAngularModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  menuOpen = false;
  darkMode = signal(false);

  constructor() {
    // Check for saved dark mode preference or system preference
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('wolfpack-theme');
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.darkMode.set(savedMode === 'dark' || (!savedMode && prefersDark));
      this.applyDarkMode(true);
    }
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  toggleDarkMode() {
    this.darkMode.update(mode => !mode);
    this.applyDarkMode(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('wolfpack-theme', this.darkMode() ? 'dark' : 'light');
    }
  }

  private applyDarkMode(isInitial: boolean) {
    if (typeof document !== 'undefined') {
      if (isInitial) {
        // Prevent transition on initial load
        document.documentElement.classList.add('no-transition');
      }
      
      if (this.darkMode()) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      
      if (isInitial) {
        // Remove no-transition after a frame
        requestAnimationFrame(() => {
          document.documentElement.classList.remove('no-transition');
        });
      }
    }
  }
}
