import {Component} from '@angular/core';
import {HomeCardComponent} from "../../../common/components/home-card/home-card.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {

  card: HomeCardComponent | undefined;

  constructor() {
  }

  cardList = [
    {
      title: "Ajouter un bien",
      img: "assets/add-property.svg",
      alt: "Image d'une maison",
      route: "biens/creation"
    },
    {
      title: "Ajouter un propriétaire",
      img: "assets/add-user.svg",
      alt: "Image d'un propriétaire",
      route: "proprietaires/creation"
    },
    {
      title: "Ajouter un locataire",
      img: "assets/add-user.svg",
      alt: "Image d'un locataire",
      route: "locataires/creation"
    }
  ];
}
