import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
