import { Component, OnInit } from '@angular/core';
let count = 0;
document.addEventListener('click', () => console.log(`Clicked ${++count} times with js`));

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
