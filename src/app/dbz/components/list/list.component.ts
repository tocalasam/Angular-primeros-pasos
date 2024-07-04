import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  //3. El emisor emite el número index al main-page.component.html
  @Output()
  public onDeleteCharacterById: EventEmitter<string> = new EventEmitter();



  @Input()
  public characterList: Character[] =[{
    name: 'Trunks',
    power: 10
  }]

  public characterList2: Character[] =[{
    name: 'Trunks',
    power: 10
  }]

  //2. el evento que recibe el indice emite el numero a traves del output
  onDeleteById(index:number, id:string | undefined ):void{
    if(id)
      this.onDeleteCharacterById.emit(id)
    else
      this.onDeleteCharacterById.emit(index.toString())
  }


  onDeleteCharacter(index: number):void {
    //console.log(index);
  }

}
