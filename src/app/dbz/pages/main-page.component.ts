import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

 /*
 constructor( public dbzService: DbzService) {
  }
 */

  constructor( private dbzService: DbzService) {
  }

  // retorna el grupo de caracteres
  public get characters(): Character[] {
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id: string): void
  {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character):void
  {
    this.dbzService.AddCharacter(character)
  }

}
