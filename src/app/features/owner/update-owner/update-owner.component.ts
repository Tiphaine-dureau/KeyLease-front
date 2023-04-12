import {Component, OnInit} from '@angular/core';
import {OwnerBusinessModel} from "../../../common/business-models/owner.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {OwnerService} from "../services/owner.service";

@Component({
  selector: 'app-update-owner',
  templateUrl: './update-owner.component.html',
  styleUrls: ['./update-owner.component.scss']
})
export class UpdateOwnerComponent implements OnInit {

  public ownerId!: string;
  public owner?: OwnerBusinessModel;
  public isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private ownerService: OwnerService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.ownerId = this.activatedRoute.snapshot.params['id_proprietaire'];
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
    this.isLoading = true;
    this.ownerService.putOwner($event, this.ownerId).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/proprietaires');
      },
      error: () => {
        // TODO handle error
      }
    });
  }
}
