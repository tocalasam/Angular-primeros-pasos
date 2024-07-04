import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {
  // esto sigue la via one way data binding (ts-> html) pero existe two way data binding (ambas direcciones)
  public name: string = 'Ironman';
  public age: number = 45;

  public get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  public getHeroDescription(): string
  {
    return `${ this.name } - ${ this.age }`;
  }

  changeHero():void {
    this.name = 'Spiderman'
    this.age = 16;
  }

  resetForm():void
  {
    this.name = 'Ironman'
    this.age = 45;
    let principal = document.getElementsByTagName('h1')[0];
    principal.innerHTML = 'Desde Angular';

    /*
      document.querySelectorAll('h1')!.forEach( element => {
        element.innerHTML ='<h1>Desde Angular</h1>';
      });
    */

  }
}
