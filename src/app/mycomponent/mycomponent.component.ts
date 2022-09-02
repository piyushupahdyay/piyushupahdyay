import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-mycomponent',
  template: '<div>Inline template</div>',
  styles: ['div{color:red}']
})
export class MycomponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
