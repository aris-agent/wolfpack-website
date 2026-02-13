import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-blog',
  imports: [RouterLink, MatIconModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})
export class Blog {

}
