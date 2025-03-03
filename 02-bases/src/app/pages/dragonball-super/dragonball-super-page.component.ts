import { Component, inject, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { DragonballSuperAddComponent } from "../../components/dragonball/character-add/character-add.component";
import { DragonballService } from "../../services/dragonball.service";

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

  public dragonballService = inject(DragonballService);

}
