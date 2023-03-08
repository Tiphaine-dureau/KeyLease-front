import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../services/owner.service";
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";

@Component({
  selector: 'app-owner-details',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {
  public ownerId!: string;
  public owner?: OwnerBusinessModel;
  public isLoading = false;
  public subtitle = "Propriétaire";

  constructor(
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id_owner'];
    this.getOwner();
  }

  private getOwner(): void {
    this.ownerService.getOwner(this.ownerId).subscribe({
      next: (owner: OwnerBusinessModel) => {
        this.owner = owner;
      },
      error: () => {
        // Todo handle error
      }
    });
  }

  public deleteOwner(): void {
    this.isLoading = true;
    this.ownerService.deleteOwner(this.ownerId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigate(["/proprietaires"]);
      },
      error: () => {
        // TODO add Toast
      }
    })
  }
}
