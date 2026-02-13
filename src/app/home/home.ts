import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-home',
  imports: [
    RouterLink, 
    MatButtonModule, 
    MatCardModule, 
    LucideAngularModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}