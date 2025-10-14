import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent {
  posts = [
    {
      nome: 'Ana Silva',
      username: '@anaSilva',
      tempo: '2h',
      avatar: 'assets/ana.jpg',
      produto: 'iPhone 15 Pro',
      categoria: 'Smartphones',
      nota: 5,
      imagemProduto: 'assets/iphone15pro.jpg',
      descricao: 'Finalmente troquei meu iPhone antigo e que diferença! A câmera é impressionante...',
      curtidas: 24
    },
    {
      nome: 'Carlos Mendes',
      username: '@carlosmnds',
      tempo: '4h',
      avatar: 'assets/carlos.jpg',
      produto: '',
      categoria: '',
      nota: 0,
      imagemProduto: '',
      descricao: 'Recomendo muito essa loja, ótimo atendimento!',
      curtidas: 10
    }
  ];
}
