import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})

export class AddCharacterComponent{

  // emite un personaje y este siempre escuchando
  // lo emite a main-page.component.html
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power:0
  }

  // mostramos el personaje y limpiamos los textBox
  emitCharacter():void {

    //debugger;

    if(this.character.name.trim().length === 0 ) return;

    else
    {
      console.log(this.character)
      // se emite el character del checkbox del html
      this.onNewCharacter.emit(this.character)
      this.character = { name: '', power: 0};
    }
  }
}
