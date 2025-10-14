import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarCategoriasComponent } from './sidebar-categorias/sidebar-categorias.component';
import { SidebarSugestoesComponent } from './sidebar-sugestoes/sidebar-sugestoes.component';
import { FeedComponent } from './feed/feed.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarCategoriasComponent,
    SidebarSugestoesComponent,
    FeedComponent
  ]
})
export class AppComponent {
  // Futuro: injetar services e dados dinâmicos
}
