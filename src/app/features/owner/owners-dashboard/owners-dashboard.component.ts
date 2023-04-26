import {Component, OnInit} from '@angular/core';
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {OwnerService} from "../services/owner.service";
import {ClientListModel} from "../../../common/components/client-list/client-list.model";

@Component({
  selector: 'app-owner',
  templateUrl: './owners-dashboard.component.html'
})
export class OwnersDashboardComponent implements OnInit {
  clientModels?: ClientListModel[];

  constructor(
    private ownerService: OwnerService) {
  }

  ngOnInit(): void {
    this.getOwners();
  }

  private getOwners(): void {
    this.ownerService.getOwners().subscribe((owners: OwnerBusinessModel[]) => {
      this.clientModels = owners.map((owner: OwnerBusinessModel) => {
        return {
          id: owner.id,
          firstName: owner.firstName,
          lastName: owner.lastName,
          email: owner.email,
          phoneNumber: owner.phoneNumber
        } as ClientListModel
      });
    })
  }
}
