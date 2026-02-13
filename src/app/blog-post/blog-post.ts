import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-blog-post',
  imports: [MarkdownModule, RouterLink, LucideAngularModule],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.css',
})
export class BlogPost {
  private route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');
  src = 'assets/blog/' + this.id + '.md';
}
