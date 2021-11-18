import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { count, findIndex, pluck, take, takeUntil, tap } from 'rxjs/operators';

of(1, 2, 3, 4, 5)
  .pipe(tap(n => {
    
    if (n == 3) {
      console.log(`value take tap!: ${n}`)
    }
  }))
  .subscribe();
  // .subscribe((v) => console.log(`value take!: ${v}`));

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
