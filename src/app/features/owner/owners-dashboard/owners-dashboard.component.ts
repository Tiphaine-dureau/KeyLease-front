import {Component, OnInit} from '@angular/core';
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {OwnerService} from "../services/owner.service";

@Component({
  selector: 'app-owner',
  templateUrl: './owners-dashboard.component.html',
  styleUrls: ['./owners-dashboard.component.scss']
})
export class OwnersDashboardComponent implements OnInit {
  owners?: OwnerBusinessModel[];
  ownerId: string = "6789"; // TODO get ID

  constructor(private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.getOwners();
  }

  private getOwners(): void {
    this.ownerService.getOwners().subscribe((owners: OwnerBusinessModel[]) => {
      this.owners = owners;
    })
  }

}
