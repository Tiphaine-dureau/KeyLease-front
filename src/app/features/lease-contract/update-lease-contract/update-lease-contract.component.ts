import {Component, OnInit} from '@angular/core';
import {LeaseContractBusinessModel} from "../../../common/business-models/lease-contract.business-model";
import {ActivatedRoute, Router} from "@angular/router";
import {LeaseContractService} from "../services/lease-contract.service";
import {PostLeaseContractModel} from "../services/post-lease-contract.model";

@Component({
  selector: 'app-update-lease-contract',
  templateUrl: './update-lease-contract.component.html'
})
export class UpdateLeaseContractComponent implements OnInit {
  private leaseContractId!: string;
  public leaseContract?: LeaseContractBusinessModel;
  public isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private leaseContractService: LeaseContractService
  ) {
  }

  public ngOnInit(): void {
    this.leaseContractId = this.activatedRoute.snapshot.params['id_contrat-location'];
    this.leaseContractService.getLeaseContract(this.leaseContractId).subscribe({
      next: (leaseContractBusinessModel: LeaseContractBusinessModel) => {
        this.leaseContract = leaseContractBusinessModel;
      },
      error: () => {
        // TODO handle error
      }
    })
  }

  public onSubmit($event: PostLeaseContractModel): void {
    this.isLoading = true;
    this.leaseContractService.modifyLeaseContract(this.leaseContractId, $event).subscribe({
      next: () => {
        this.isLoading = false;
        this.router.navigateByUrl('/contrats-location/' + this.leaseContractId)
      },
      error: () => {
        // TODO handle error
      }
    })
  }
}
