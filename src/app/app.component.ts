import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo2';
  counter = 0;
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

    console.log(event);
  }
}
