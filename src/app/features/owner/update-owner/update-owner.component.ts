import {Component, OnInit} from '@angular/core';
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {ActivatedRoute} from "@angular/router";
import {OwnerService} from "../services/owner.service";

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss']
})
export class UpdateOwnerComponent implements OnInit {

  public ownerId!: string;
  public owner?: OwnerBusinessModel;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService
  ) {
  }

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id_owner'];
    this.ownerService.getOwner(this.ownerId).subscribe({
      next: (owner: OwnerBusinessModel) => {
        this.owner = owner;
      },
      error: () => {
        // TODO handle error
      }
    });
  }

  public onSubmit($event: OwnerBusinessModel): void {
    this.ownerService.putOwner($event, this.ownerId).subscribe();
  }
}
