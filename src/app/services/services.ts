import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-services',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

}
