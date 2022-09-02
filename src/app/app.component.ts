import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Logix Infotech Park';
  constructor(){
    setTimeout(() => {
      this.title="Hard Shell Technology pvt ltd"
    },2000);
  }
  
}
