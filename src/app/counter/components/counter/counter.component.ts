import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter: {{counter}}</p>
    <button (click)="changeCounter(-1)">-1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="changeCounter(1)">+1</button>
  `
})

export class CounterComponent{
  public counter: number = 10;

  resetCounter() {
    this.counter = 10;
  }

  changeCounter(value: number) {
    this.counter += value;
  }
}
