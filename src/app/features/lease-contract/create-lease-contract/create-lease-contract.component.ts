import {Component, OnInit} from '@angular/core';
import {LeaseContractService} from "../services/lease-contract.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostLeaseContractModel} from "../services/post-lease-contract.model";

@Component({
  selector: 'app-create-lease-contract',
  templateUrl: './create-lease-contract.component.html'
})
export class CreateLeaseContractComponent implements OnInit {
  public isLoading = false;
  public propertyId!: string;

  constructor(
    private leaseContractService: LeaseContractService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  public ngOnInit(): void {
    this.propertyId = this.activatedRoute.snapshot.params['id_bien'];
  }

  public onSubmit(model: PostLeaseContractModel): void {
    this.isLoading = true;
    this.leaseContractService.postLeaseContract(model).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/biens/' + this.propertyId)
      }, error: () => {
        // TODO handle error
      }
    })
  }
}
