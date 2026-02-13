import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-about',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
