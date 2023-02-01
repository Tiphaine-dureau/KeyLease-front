import {Component} from '@angular/core';
import {CardComponent} from "../../../common/components/card/card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  card: CardComponent | undefined;

  constructor() {
  }

  cardList = [
    {title: "Ajouter un bien", img: "assets/add-property.svg", alt: "Image d'une maison", route: ""},
    {title: "Ajouter un propriétaire", img: "assets/add-user.svg", alt: "Image d'un propriétaire", route: ""},
    {title: "Ajouter un locataire", img: "assets/add-user.svg", alt: "Image d'un locataire", route: ""}
  ];
}
