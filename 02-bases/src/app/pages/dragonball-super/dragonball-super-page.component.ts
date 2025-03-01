import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballSuperAddComponent } from "../../components/dragonball/character-add/character-add.component";

interface Character {
  id: number,
  name: string,
  power: number
}

@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, DragonballSuperAddComponent]
})
export class DragonballSuperPageComponent {

  name = signal('')
  power = signal(0)

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },
  ])



}
