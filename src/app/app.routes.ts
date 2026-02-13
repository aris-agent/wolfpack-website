import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home').then(m => m.Home) },
  { path: 'services', loadComponent: () => import('./services/services').then(m => m.Services) },
  { path: 'about', loadComponent: () => import('./about/about').then(m => m.About) },
  { path: 'blog', loadComponent: () => import('./blog/blog').then(m => m.Blog) },
  { path: 'blog/:id', loadComponent: () => import('./blog-post/blog-post').then(m => m.BlogPost) },
  { path: 'contact', loadComponent: () => import('./contact/contact').then(m => m.Contact) },
];