import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})


export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She hulk', 'Thor'];
  public heroRemoved?: string;

  removeLastHero():void {

    this.heroRemoved =  this.heroNames.pop();

  }
}
