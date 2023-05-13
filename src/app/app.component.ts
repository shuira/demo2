import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  counter = 0;
  keyword = '';
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
