import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Article } from './article';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  title = 'demo2';
  counter = 0;
  keyword = '';
  displayHeader = true; //true 顯示header , false 不顯示header
  articles: Article[] = [];

  ngOnInit(): void {
    this.httpClient.get<Article[]>('http://localhost:4200/assets/articles.json').subscribe(data => {
      this.articles = data;
      console.log(data);
    });
  }

  search(event:MouseEvent){
    console.log(event.x);
    console.log('search');
    ++this.counter;
  }

  inputKey(event:KeyboardEvent){
    if(event.key === 'Enter')
    console.log((event.target as HTMLInputElement).value);
  }

  inputByenter(event:Event){
    // enter KeyboardEvent angular16有問題要轉型
    const newEvent = event as KeyboardEvent;
    console.log(newEvent);
  }
}
